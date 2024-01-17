
// https://leetcode.com/problems/range-sum-query-immutable/description/

export class NumArray {

  prefix: number[]
  nums: number[]

  constructor(nums: number[]) {
     this.prefix = []
     this.nums = nums
     this.init()
  }

  sumRange(left: number, right: number): number {
   return (this.prefix[right] - this.prefix[left]) + this.nums[left]
  }

  init () {
    let sum = 0
    this.nums.forEach((num, idx) => {
      sum += num
      this.prefix[idx] = sum
    })
  }
}