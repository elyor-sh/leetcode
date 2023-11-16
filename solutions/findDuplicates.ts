
// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

export function findDuplicates(nums: number[]): number[] {
  const result: number[] = []
  const hash = new Set<number>()

  for (const num of nums){
    if(hash.has(num)){
      result.push(num)
    }

    hash.add(num)
  }


  return result
};