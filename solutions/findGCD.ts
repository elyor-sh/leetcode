
// https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/

export function findGCD(nums: number[]): number {

  // const min = Math.min(...nums) 
  // const max = Math.max(...nums)

  const getMinMax = (): {min: number, max: number} => {
    let min = nums[0]
    let max = nums[0]

    for (const num of nums){
      if(min > num){
        min = num
      }
      if(max < num){
        max = num
      }
    }

    return {min, max}
  }

  const {min, max} = getMinMax()

  if(max % min === 0){
    return min
  }

  for (let i = 2; i < min; i++){
    if(min % i === 0){
      const del = min / i

      if(max % del === 0){
        return del
      }
    }
  }
  

  return 1
};