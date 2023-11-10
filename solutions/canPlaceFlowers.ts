
// https://leetcode.com/problems/can-place-flowers/description/

export function canPlaceFlowers(flowerbed: number[], n: number): boolean {

  if(flowerbed.length === 1 && flowerbed[0] === 0){
    return true
  }

  for (let i = 0; i < flowerbed.length; i++){
    const cur = flowerbed[i]
    const prev = flowerbed[i - 1]
    const next = flowerbed[i + 1]

    if(n === 0){
      return true
    }

    if(i === 0){
      if (cur === 0 && next === 0 && flowerbed[i + 1] === 0){
        n--
        flowerbed[i] = 1
      }
    }

    if(i === flowerbed.length - 1){
      if(cur === 0 && prev === 0){
        n--
        flowerbed[i] = 1
      }
    }

    if(cur === 0 && prev === 0 && next === 0){
      n--
      flowerbed[i] = 1
    }
  }
    
  return n === 0
};