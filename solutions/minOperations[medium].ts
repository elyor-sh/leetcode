
// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/description/

export function minOperations(nums: number[]): number {
  let count = 0

  const map = new Map<number, number>()

  for (const num of nums){
      let cnt = map.get(num) || 0
      cnt++
      map.set(num, cnt)
  }

  console.log(map);

  for (const [_, value] of map){
      if(value === 1){
          return -1
      }

      let vr = Math.floor(value / 3)
      let rem = value % 3

      if(rem > 0){
          vr++
      }

      count += vr

  }

  return count
}