
// https://leetcode.com/problems/largest-number/description/

export function largestNumber(nums: number[]): string {
  return joinToString(nums.sort((a, b) => sortComparator(a, b)))
};

function sortComparator (first: number, second: number): number {

const f = first.toString()
const s = second.toString()

if(f === s){
  return 0
}

if(f + s > s + f){
  return -1
}

return 1
}

function joinToString (nums: number[]): string{
let result = ''

for (let i = 0; i < nums.length; i++){
  if(nums[i] === 0 && result === '0'){
    continue
  }

  result += nums[i]
}

return result ? result : '0'
}