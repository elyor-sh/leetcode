export function numWaterBottles(numBottles: number, numExchange: number): number {
  let result = 0

  let empty = 0
  let filled = numBottles

  while (filled > 0) {
    result += filled
    empty += filled
    filled = Math.floor(empty / numExchange)
    empty -= filled * numExchange
  }

  return result
};