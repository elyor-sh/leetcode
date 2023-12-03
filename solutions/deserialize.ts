


class NestedInteger {
  value?: number

  constructor (val?: number) {
    this.value = val
  }

  setInteger(value: number) {}

  add(elem: NestedInteger) {}

  // @ts-ignore
  getList(): NestedInteger[] {}
}


export function deserialize(s: string): NestedInteger {
  if (!s) {
    return new NestedInteger(0);
  }
  if (s[0] !== "[") {
    return new NestedInteger(+s);
  }

  return dfs({
    s,
    i: 0,
    stack: [],
    currentNestedInteger: new NestedInteger(),
  })!;
}

const integers = "-0123456789".split("");

function dfs({
  s,
  i,
  currentNestedInteger,
  stack,
}: {
  s: string;
  i: number;
  currentNestedInteger: NestedInteger;
  stack: NestedInteger[];
}) {
  if (s[i] === "]") {
    const tmp = stack.pop()!;

    if (stack.length) {
      stack[stack.length - 1].add(tmp);

      i += 1;
      currentNestedInteger = stack[stack.length - 1];
      return dfs({
        s,
        i,
        currentNestedInteger,
        stack,
      });
    }

    return tmp;
  }

  if (s[i] === "[") {
    currentNestedInteger = new NestedInteger();
    stack.push(currentNestedInteger);
    i += 1;

    return dfs({
      s,
      i,
      currentNestedInteger,
      stack,
    });
  }

  if (s[i] === ",") {
    i += 1;
    return dfs({
      s,
      i,
      currentNestedInteger,
      stack,
    });
  }

  const numberChars: string[] = [];
  while (integers.includes(s[i])) {
    numberChars.push(s[i]);
    i += 1;
  }
  currentNestedInteger.add(new NestedInteger(+numberChars.join("")));

  return dfs({
    s,
    i,
    currentNestedInteger,
    stack,
  });
}