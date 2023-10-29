
// https://leetcode.com/problems/3sum-closest/

export function threeSumClosest(nums: number[], target: number): number {

    let result = 0
    let distance = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            for (let k = j + 1; k < nums.length; k++){
                const sum = nums[i] + nums[j] + nums[k]
                const curDist = Math.abs(sum - target)
                if(distance > curDist){
                    distance = curDist
                    result = sum
                }
            }
        }
    }

    return result
}
