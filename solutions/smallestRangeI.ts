
// https://leetcode.com/problems/smallest-range-i/description/

export function smallestRangeI(nums: number[], k: number): number {
    let max = nums[0]
    let min = nums[0]

    for (const num of nums){
        max = Math.max(num, max)
        min = Math.min(num, min)
    }

    return Math.max(0, max - min - 2 * k)
}