
// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description

export function maxCoins(piles: number[]): number {

  piles.sort((a, b) => a - b)

  let result = 0

  for (let i = piles.length / 3; i < piles.length; i+=2){
    result += piles[i]
  }

  return result
}