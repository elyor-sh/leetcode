
// https://leetcode.com/problems/count-number-of-nice-subarrays/description/

export function numberOfSubarrays(nums: number[], k: number): number {
    const map = new Map<number, number>([[0, 1]])
    let curr = 0
    let result = 0

    for(let i = 0; i < nums.length; i++) {
        curr += nums[i] % 2
        result += map.get(curr - k) || 0;
        map.set(curr, (map.get(curr) || 0) + 1)
    }

    return result
}