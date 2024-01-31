
// https://leetcode.com/problems/daily-temperatures/

export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length
  const nextGreater: number[] = new Array(n).fill(0)
  const stack = [n-1]

  for(let i= n-1; i >= 0; i--){
    const temp = temperatures[i]
    while(stack.length && temperatures[stack[stack.length-1]]<= temp){
      stack.pop()
    }

    if (stack.length){
      nextGreater[i] = stack[stack.length-1]-i
    }

    stack.push(i)
  }

  return nextGreater
}