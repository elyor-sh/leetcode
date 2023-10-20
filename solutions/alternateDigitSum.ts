
// https://leetcode.com/problems/alternating-digit-sum/description/

export function alternateDigitSum(n: number): number {

  let sum = 0

  const str = n.toString()

  for (let i = 0; i < str.length; i++) {

    const d = Number(str[i])
    let digit = (i + 1) % 2 === 0 ? -d : d
    sum += digit

  }

  return sum

};