
// https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/description

export function getSumAbsoluteDifferences(nums: number[]): number[] {
    let result: number[] = []

    const sum = nums.reduce((acc, item) => acc += item, 0)

    let leftSum = 0
    for (let i = 0; i < nums.length; i++){
        const rightSum = sum - leftSum - nums[i]

        const lCount = i
        const rCount = nums.length - i - 1

        result[i] = lCount * nums[i] - leftSum + rightSum - rCount * nums[i]
        leftSum += nums[i]
    }

    return result
}