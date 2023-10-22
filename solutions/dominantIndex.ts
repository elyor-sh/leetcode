

// https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/

export function dominantIndex(nums: number[]): number {
    let greater = nums[0]
    let index = -1

    for (let i = 0; i < nums.length; i++){
        if(greater < nums[i]){
            greater = nums[i]
            index = i
        }
    }

    for (let i = 0; i < nums.length; i++){
        if(index === i || nums[i] === 0){
            continue
        }

        if(greater / nums[i] < 2){
            return -1
        }
    }

    return index
}