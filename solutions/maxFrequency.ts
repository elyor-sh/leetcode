
// https://leetcode.com/problems/frequency-of-the-most-frequent-element

export function maxFrequency(nums: number[], k: number): number {
    nums.sort((a, b) => a - b)

    let max = 1
    let left = 0

    for (let right = 1; right < nums.length; ++right){
        k-= (nums[right] - nums[right - 1]) * (right - left)

        while (k < 0){
            k+= nums[right] - nums[left]
            left++
        }

        max = Math.max(max, right - left + 1)
    }

    return max
};

