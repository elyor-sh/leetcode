
// https://leetcode.com/problems/rotate-array/description

export function rotate(nums: number[], k: number): void {
    
  for (let i = 0; i < k; i++){
    const last = nums.pop()!
    nums.unshift(last)
  }
  
}