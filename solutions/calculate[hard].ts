
// https://leetcode.com/problems/basic-calculator

export function calculate(s: string): number {
  let res = 0;
  let curr = 0;
  let sign = 1;
  let stack = [];

  for (let i = 0;i<s.length;i++) {
      if (s[i] === '0' || Number(s[i])) {
          curr = curr * 10 + Number(s[i]);
          continue;
      }
      if (s[i] === '+' || s[i] === '-') {
          res += curr * sign;
          curr = 0;
          sign = s[i] === '+' ? 1 : -1;
          continue;
      }
      if (s[i] === '(') {
          stack.push(res);
          stack.push(sign);
          res = 0;
          sign = 1;
          continue;
      }
      if (s[i] === ')') {
          res += curr * sign;
          res = res * stack.pop()!
          res += stack.pop()!
          curr = 0
          continue
      }
  }
  return res + sign * curr;
}