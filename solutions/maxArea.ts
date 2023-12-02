
// https://leetcode.com/problems/container-with-most-water/description

export function maxArea(height: number[]): number {
  let result = 0

  let start = 0
  let end = height.length - 1

  while (start < end){

    const S = Math.min(height[start], height[end]) * (end - start)
    result = Math.max(result, S)

    if(height[start] <= height[end]) {
      start++
    }else {
      end--
    }
    
  }
  

  return result
}