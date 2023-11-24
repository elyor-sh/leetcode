
// https://leetcode.com/problems/sort-an-array/description/

export function sortArray(nums: number[]): number[] {

  if(nums.length <= 1){
    return nums
  }

  const mid = Math.floor(nums.length / 2)
  const left = sortArray(nums.slice(0, mid))
  const right = sortArray(nums.slice(mid))

  return merge(left, right)
};

function merge(left: number[], right: number[]) {

let sortedArr: number[] = [] 

while (left.length && right.length) {

  if (left[0] < right[0]) {
    sortedArr.push(left.shift()!)
  } else {
    sortedArr.push(right.shift()!)
  }
}

return [...sortedArr, ...left, ...right]
}