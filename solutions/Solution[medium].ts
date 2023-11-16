
// https://leetcode.com/problems/random-pick-index/description/

export class Solution {

  map: Map<number, number[]>

  constructor(nums: number[]) {
      this.map = new Map()

      for (let i = 0; i < nums.length; i++){
        const cur = this.map.get(nums[i]) || []
        cur.push(i)
        this.map.set(nums[i], cur)
      }
  }

  pick(target: number): number {
      const indexes = this.map.get(target)!
      const randomIdx = Math.floor(Math.random() * indexes.length)
      return indexes[randomIdx]
  }
}