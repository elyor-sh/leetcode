

// https://leetcode.com/problems/third-maximum-number/description/
export function thirdMax(nums: number[]): number {
    nums = Array.from(new Set(nums.sort((a, b) => a - b)))
    const len = nums.length

    if(len >= 3){
        return nums[len - 3]
    }

    return nums[len - 1]
}