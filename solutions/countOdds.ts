export function countOdds(low: number, high: number): number {
  let start =  low % 2 === 0 ? low + 1 : low
  const end =  high % 2 === 0 ? high - 1 : high

  return Math.ceil((end + 1 - start) / 2)
};