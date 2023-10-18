export function xorOperation(n: number, start: number): number {
  if(n === 1) return start

  let result = start
  
  for(let i = 1; i < n; i++) {

      const num = start + 2 * i
      result = result^num

  }

  return result
};