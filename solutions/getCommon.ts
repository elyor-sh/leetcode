
// https://leetcode.com/problems/minimum-common-value/description/

export function getCommon(nums1: number[], nums2: number[]): number {

  const hash = new Set(nums2)

  for (let i = 0; i < nums1.length; i++){
    if(hash.has(nums1[i])){
      return nums1[i]
    }
  }

  return -1
};