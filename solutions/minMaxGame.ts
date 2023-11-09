
// https://leetcode.com/problems/min-max-game/description/

export function minMaxGame(nums: number[]): number {
    if(nums.length < 2){
        return nums[0]
    }  

    const result: number[] = []

    for (let i = 0; i < nums.length - 1; i += 2 ){
        if((i + 2) % 4 === 0){
            result.push(Math.max(nums[i], nums[ i+ 1]))
        }else {
            result.push(Math.min(nums[i], nums[ i+ 1]))
        }
    }

    return minMaxGame(result)
};