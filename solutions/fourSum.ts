
// https://leetcode.com/problems/4sum/description/

export function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b)
  return kSum(nums, target, 0, 4)
};

function kSum (nums: number[], target: number, start: number, k: number) {
  const res: number[][] = []

  if(start === nums.length){
    return res
  }

  const avgValue = Math.floor(target / k)

  if(nums[start] > avgValue || avgValue > nums[nums.length - 1]){
    return res
  }

  if(k === 2){
    return twoSum(nums, target, start)
  }

  for (let i = start; i < nums.length; ++i){
    if(i === start || nums[i - 1] !== nums[i]){
      for (const subset of kSum(nums, target - nums[i], i + 1, k -1)){
        res.push([nums[i]])
        res[res.length - 1].push(...subset)
      }
    }
  }

  return res
}

function twoSum (nums: number[], target: number, start: number) {
  const res: number[][] = []

  let lo = start
  let hi = nums.length - 1

  while (lo < hi){
    const currSum = nums[lo] + nums[hi]

    if(currSum < target || (lo > start && nums[lo] === nums[lo - 1])){
      ++lo
    }else if (currSum > target || (hi < nums.length - 1 && nums[hi] === nums[hi + 1])){
      --hi
    }else {
      res.push([nums[lo++], nums[hi--]])
    }
  }

  return res
}