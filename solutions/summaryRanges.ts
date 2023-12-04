
// https://leetcode.com/problems/summary-ranges/description

export function summaryRanges(nums: number[]): string[] {
  const result: string[] = []

  let tmp = ''
  let start = nums[0]

  for (let i = 1; i <= nums.length; i++){

    if(nums[i] - nums[i - 1] === 1){
      continue
    }

    tmp = start === nums[i - 1] ? `${start}` : `${start}->${nums[i - 1]}`

    result.push(tmp)
    start = nums[i]

  }

  return result
}