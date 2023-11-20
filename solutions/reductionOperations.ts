
// https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/description/

export function reductionOperations(nums: number[]): number {
    let cnt = 0

    nums.sort((a , b) => b - a)

    for (let i = 1; i <= nums.length - 1; i++){
        const next = nums[i]
        const cur = nums[i - 1]

        if(next !== cur){
            cnt += i
        }
    }

    return cnt
}