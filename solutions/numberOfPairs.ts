
// https://leetcode.com/problems/maximum-number-of-pairs-in-array/description/

export function numberOfPairs(nums: number[]): number[] {

    const map = new Map<number, number>()

    for (const num of nums){
        const cur = map.get(num)
        map.set(num, (cur || 0) + 1)
    }

    let leftover = 0

    for (const [_, value] of map){
        if(value % 2 > 0){
            leftover++
        }
    }

    return [(nums.length - leftover) / 2, leftover]
};