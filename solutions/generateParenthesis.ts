
// https://leetcode.com/problems/generate-parentheses/description/

function backtrack(res: string[], stack: number, s: string, n: number): void {
  if(stack < 0 || s.length > 2 * n) return;
  if(s.length == 2 * n && stack == 0) {
      res.push(s);
      return;
  }
  backtrack(res, stack+1, s+'(', n);
  backtrack(res, stack-1, s+')', n);
}

export function generateParenthesis(n: number): string[] {
  let res: string[] = [];
  backtrack(res, 0, '', n);
  return res;
};