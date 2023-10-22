
// https://leetcode.com/problems/monotonic-array/description/

export function isMonotonic(nums: number[]): boolean {
    if(nums.length < 2){
        return true
    }
    const up = nums[nums.length - 1] > nums[0]

    for (let i = 1; i < nums.length; i++){
        if(up && nums[i] < nums[i - 1]){
            return false
        }

        if(!up && nums[i] > nums[i - 1]){
            return false
        }
    }

    return true
}