
// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

export function findDifference(nums1: number[], nums2: number[]): number[][] {

    const hashLeft = new Set<number>(nums1)
    const hashRight = new Set<number>(nums2)

    for (const left of hashLeft){
        if(hashRight.has(left)){
            hashRight.delete(left)
            hashLeft.delete(left)
        }
    }

    return [Array.from(hashLeft), Array.from(hashRight)]
}