
// https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/description/

export function smallestDivisor(nums: number[], threshold: number): number {
    let high = Math.max(...nums)+1, low = 1;
    let res = high;

    while (low <= high) {
        let mid = Math.ceil(low + ((high - low)/2));
        let temp = 0;
        for (let i = 0; i < nums.length; i++) {
            temp += Math.ceil(nums[i]/mid);
        }
        if (temp > threshold) {
            low = mid+1;
        } else {
            res = Math.min(res, mid);
            high = mid-1;
        }
    }

    return res;
};