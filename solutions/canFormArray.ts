
// https://leetcode.com/problems/check-array-formation-through-concatenation/description/

export function canFormArray(arr: number[], pieces: number[][]): boolean {
  const map = new Map<number, number[]>()

  for (let i = 0; i < pieces.length; i++){
    const p = pieces[i]
    map.set(p[0], p)
  }

  for (let i = 0; i < arr.length; ){
    const num = arr[i]
    const nums = map.get(num)

    if(!nums){
      return false
    }

    let idx = 0

    while (idx < nums.length){
      
      if(nums[idx] !== arr[i]){
        return false
      }

      idx++
      i++
    }
  }

  return true
};