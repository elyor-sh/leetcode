
// https://leetcode.com/problems/heaters/description/

export function findRadius(houses: number[], heaters: number[]): number {
  let radius = 0

  for (const house of houses){
    let min = Number.MAX_SAFE_INTEGER
    for (const heater of heaters){
      min = Math.min(min, Math.abs(heater - house))
    }

    radius = Math.max(min, radius)
  }

  return radius
}