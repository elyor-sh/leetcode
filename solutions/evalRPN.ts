
// https://leetcode.com/problems/evaluate-reverse-polish-notation

export function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  const operators: Record<string, string> = {
    '*': '*',
    '/': '/',
    '+': '+',
    '-': '-'
  }

  tokens.forEach((token) => {
    if(operators[token]){
      const second = stack.pop()!
      const first = stack.pop()!

      stack.push(done(first, second, token))
    }else {
      stack.push(Number(token))
    }
  })
  
  return stack[0]
};

function done (op1: number, op2: number, op: string): number {

switch (op) {
  case '*':
      return op1 * op2
  case '/':
      return Math.trunc(op1 / op2)
  case '-':
      return op1 - op2 

  default:
    return op1 + op2 
}

}