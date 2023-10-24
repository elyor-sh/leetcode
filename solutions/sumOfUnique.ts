
// https://leetcode.com/problems/sum-of-unique-elements/description/

export function sumOfUnique(nums: number[]): number {

  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {

    const cur = map.get(nums[i]);

    if(cur){
      map.set(nums[i], cur + 1);
    }else {
      map.set(nums[i], 1)
    }
  }
  

  return [...map.keys()].filter(key => map.get(key) === 1).reduce((acc, item) => acc+=item, 0)
};