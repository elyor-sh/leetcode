
// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/description

const getCount = (str: string) => {
  const hash: Record<string, number> = {}

  for (const s of str){
    hash[s] = (hash[s] || 0) + 1
  }

  return hash
}

export function garbageCollection(garbage: string[], travel: number[]): number {

    const travelStock = {
      M: 0,
      P: 0,
      G: 0
    }

    let lastIndex = {
      M: 0,
      P: 0,
      G: 0
    }

    let result = 0

    for (let i = garbage.length - 1; i >= 0; i--){
      const current = garbage[i]

      const hash = getCount(current)

      const m = hash['M'] || 0
      const p = hash['P'] || 0
      const g = hash['G'] || 0

      result += m + p + g

      if(i >= 1){
        if(m > 0 || travelStock.M > 0){
          travelStock.M += travel[i - 1]
        }
  
        if(p > 0 || travelStock.P > 0){
          travelStock.P += travel[i - 1]
        }
  
        if(g > 0 || travelStock.G > 0){
          travelStock.G += travel[i - 1]
        }
      }
    }
    

    return result + travelStock.M + travelStock.P + travelStock.G
};