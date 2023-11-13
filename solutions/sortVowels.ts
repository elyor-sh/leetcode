
// https://leetcode.com/problems/sort-vowels-in-a-string/

export function sortVowels(s: string): string {
  const arr = s.split('')

  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  const sortedVowels: string[] = arr.filter((s) => vowels.has(s)).sort()
  
  let result = ''
  let idx = 0

  for (let i = 0; i < arr.length; i++){
    let cur = arr[i]

    if(!vowels.has(cur)){
      result += cur
    }else {
      result += sortedVowels[idx]
      idx++
    }
    
  }
  

  return result
};