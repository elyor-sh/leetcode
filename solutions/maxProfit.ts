
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description

export function maxProfit(prices: number[]): number {
  let profit = 0

  let left = 0
  let right = 1

  while(right < prices.length){

    if(prices[left] < prices[right]){

      profit += prices[right] - prices[left]
      left++

    }else {
      left = right
    }

    right++
  }

  return profit
}