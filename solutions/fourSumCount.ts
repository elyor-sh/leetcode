
// https://leetcode.com/problems/4sum-ii/description/

export function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  let count = 0

  const map = new Map<number, number>()

  const n = nums1.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sum = nums1[i] + nums2[j]
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sum = nums3[i] + nums4[j]
      const c = map.get(-sum)
      if (c) {
        count += c
      }
    }
  }

  return count
}