
// https://leetcode.com/problems/count-integers-with-even-digit-sum/description/

export function countEven(num: number): number {

  function getSumOfDigits (n: number) {
    const numStr = n.toString()
    let sum = 0

    for (const digit of numStr){
      sum += Number(digit)
    }

    return sum
  } 


  const sum = getSumOfDigits(num)

  return sum % 2 === 0 ? Math.floor(num / 2) : Math.ceil(num / 2) - 1
};