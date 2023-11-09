
// https://leetcode.com/problems/divide-array-into-equal-pairs/description/

export function divideArray(nums: number[]): boolean {
    const hash = new Set<number>()

    for (const num of nums){
        if(hash.has(num)){
            hash.delete(num)
        }else {
            hash.add(num)
        }
    }

    return hash.size === 0
};