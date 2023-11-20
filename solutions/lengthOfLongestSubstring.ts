
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

export function lengthOfLongestSubstring(s: string): number {

  const map = new Map<string, number>();

  let left = 0;
  let count = 0;
  let max = 0;
  
  for(let right = 0; right < s.length; right++) {

      map.set(s[right], map.has(s[right]) ? map.get(s[right])! + 1 : 1)
      let val = map.get(s[right])!
      count++;

      while(val > 1) {
          count--;
          map.set(s[left], map.get(s[left])! - 1)
          val = map.get(s[right])!
          left++;
      }

      max = Math.max(count, max)

  }

  return max
};