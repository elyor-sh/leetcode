
// https://leetcode.com/problems/intersection-of-multiple-arrays/description/

export function intersection(nums: number[][]): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            map.set(nums[i][j], (map.get(nums[i][j]) || 0) + 1); 
        }
    }

    const ans = []
    for (const [key, value] of map) {
        if (value === nums.length) ans.push(key);
    }


    return ans.sort((a, b) => a - b);
};