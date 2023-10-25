
// https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/description/

export function minNumber(nums1: number[], nums2: number[]): number {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  const hash = new Set(nums2)

  for (let i = 0; i < nums1.length; i++){
    if(hash.has(nums1[i])){
      return nums1[i]
    }
  }

  const min1 = nums1[0]
  const min2 = nums2[0]

  return min1 < min2 ? Number(`${min1}${min2}`) : Number(`${min2}${min1}`)
};