
// https://leetcode.com/problems/categorize-box-according-to-criteria/description/

export function categorizeBox(length: number, width: number, height: number, mass: number): string {

  let isBulky = false
  let isHeavy = false

  if(length >= 10**4 || width >= 10**4 || height >= 10**4 || mass >= 10**4 || length * height * width >= 10**9){
    isBulky = true
  }

  if(mass >= 100){
    isHeavy = true
  }

  if(isBulky && isHeavy){
    return 'Both'
  }

  if(isBulky && !isHeavy){
    return 'Bulky'
  }

  if(!isBulky && isHeavy){
    return 'Heavy'
  }

  return 'Neither'

};