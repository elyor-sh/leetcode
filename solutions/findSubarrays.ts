
// https://leetcode.com/problems/find-subarrays-with-equal-sum/description/

export function findSubarrays(nums: number[]): boolean {

    if(nums.length <= 2){
        return false
    }

    const hash = new Set<number>()

    for (let i = 0; i < nums.length - 1; i++){
        const sum = nums[i] + nums[i + 1]
        if(hash.has(sum)){
            return true
        }

        hash.add(sum)
    }

    return false
};