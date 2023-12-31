
// https://leetcode.com/problems/basic-calculator-ii/description/

const isOperator = (c: string): boolean => c === "+" || c === "-" || c === "*" || c === "/";

const helper = (stack: Array<number>, sign: string, num: string): void => {
    if (sign === "+") {
        stack.push(Number(num));
    } else if (sign === "-") {
        stack.push(Number(-num));
    } else if (sign === "*") {
        stack.push(Math.floor(stack.pop()! * Number(num)));
    } else if (sign === "/") {
        stack.push(Math.trunc(stack.pop()! / Number(num)));
    }
};

export const calculate = (s: string): number => {
    s.replace(/\s/g, "");
    let num: string = "";
    let stack: Array<number> = [];
    let sign: string = "+";
    const isNumber = new RegExp(/^\d+$/);

    for (let i: number = 0; i < s.length; i++) {
        if (isNumber.test(s[i])) {
            num += s[i];
        }
        if (isOperator(s[i]) || i === s.length - 1) {
            helper(stack, sign, num);
            sign = s[i];
            num = "";
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};