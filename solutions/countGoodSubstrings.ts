

// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/

export function countGoodSubstrings(s: string): number {

  let count = 0

  const isGood = (str: string) => {
    return str.length === new Set(str.split('')).size
  }

  for (let i = 0; i < s.length; i++){
    const end = i + 3

    if(end > s.length){
      break
    }

    const substr = s.slice(i, end)

    if(isGood(substr)){
      count++
    }
  }


  return count
};