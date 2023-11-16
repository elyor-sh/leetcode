
// https://leetcode.com/problems/majority-element-ii/description/

export function majorityElement(nums: number[]): number[] {
  const map = new Map<number, number>()

  for(const num of nums){
      const found = map.get(num) || 0
      map.set(num, found + 1)
  }

  const result: number[] = []

  for (const [key, value] of map){
      if(value > nums.length / 3){
          result.push(key)
      }
  }

  return result
};