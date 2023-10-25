
// https://leetcode.com/problems/number-of-different-integers-in-a-string/description/

export function numDifferentIntegers(word: string): number {

  let result = ''

  for (const l of word){

    const num = Number(l)

    if(!isNaN(num)){
      result+= l
    }else {
      result += ' '
    }
  }

  const hash = new Set<string>()

  const arr = result.split(' ')
  

  for (const s of arr){

    if(s !== ''){
      hash.add(s.startsWith('0') ? Number(s).toString() : s)
    }

  }
  

  return hash.size

};