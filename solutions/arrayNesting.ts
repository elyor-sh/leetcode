
// https://leetcode.com/problems/array-nesting/description/

export function arrayNesting(nums: number[]): number {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != Number.MAX_VALUE) {
            let start = nums[i], count = 0;
            while (nums[start] != Number.MAX_VALUE) {
                let temp = start;
                start = nums[start];
                count++;
                nums[temp] =Number.MAX_VALUE;
            }
            res = Math.max(res, count);
        }
    }
    return res;
}