
// https://leetcode.com/problems/binary-search/description/

export function search(nums: number[], target: number): number {

    let start = 0
    let end = nums.length - 1

    while (start <= end){
        const middle = Math.floor((start + end) / 2)
        if(nums[middle] === target){
            return middle
        }

        if(nums[middle] < target){
            start = middle + 1
        }else {
            end = middle - 1
        }
    }

    return -1
}
