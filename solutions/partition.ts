
// https://leetcode.com/problems/palindrome-partitioning/description/

const isPalindrome = (s: string, start: number, end: number) => {

  while(start < end){
      if(s[start] !== s[end]) return false
      start++
      end--
  }

  return true
}

export function partition(s: string): string[][] {

  const result: string[][] = []

  const dfs = (start: number, str: string, list: string[]) => {

      if(start === str.length){
          result.push([...list])
          return
      }

      for (let i = start; i < str.length; i++){
          if(isPalindrome(str, start, i)){
              list.push(str.slice(start, i + 1))
              dfs(i + 1, str, list)
              list.pop()
          }
      }

  }

  dfs(0, s, [])

  return result
};