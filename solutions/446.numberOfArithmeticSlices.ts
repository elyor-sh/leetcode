
// https://leetcode.com/problems/arithmetic-slices-ii-subsequence/

export function numberOfArithmeticSlices(nums: number[]): number {
    let count = 0;
    const dp: Array<Map<number,number>> = Array(nums.length).fill(0).map(() => (new Map()));

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            const subseqAtPrevNum = dp[j].get(diff) ?? 0;

            count += subseqAtPrevNum;

            dp[i].set(diff, (dp[i].get(diff) ?? 0) + subseqAtPrevNum + 1)
        }
    }
    return count
}