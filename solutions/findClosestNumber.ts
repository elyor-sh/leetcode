
// https://leetcode.com/problems/find-closest-number-to-zero/description/

export function findClosestNumber(nums: number[]): number {
    let closest = nums[0]

    for (const num of nums) {
        const x = Math.abs(num)
        
        if(Math.abs(closest) > x){
            closest = num
            continue
        }

        if(Math.abs(closest) === x && num > closest){
            closest = num
        }
    }

    return closest
};