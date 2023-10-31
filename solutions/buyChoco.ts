
// https://leetcode.com/problems/buy-two-chocolates/description/

export function buyChoco(prices: number[], money: number): number {

  prices.sort((a, b) => a - b)

  const twoChoco = prices[0] + prices[1]

  const ost = money - twoChoco

  if(ost < 0){
    return money
  }

  return ost

};