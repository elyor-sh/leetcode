
// https://leetcode.com/problems/minimum-window-substring/description

export function minWindow(s: string, t: string): string {
  if(t.length > s.length) return '';
  if(s === t) return t;

  const tracking = new Map<string, number>();
  t.split('').forEach(ele => tracking.set(ele, (tracking.get(ele) ?? 0) + 1));

  let left = 0;
  let min = Infinity;
  let count = 0;
  let answer = '';
  for(let i = 0; i < s.length; i++) {
      if(tracking.has(s[i])) {
          tracking.set(s[i], tracking.get(s[i])! - 1);
          if(tracking.get(s[i]) === 0) {
              count += 1;
              while(count === tracking.size) {
                  if(i - left + 1 < min) {
                      min = i - left + 1;
                      answer = s.slice(left, i + 1);
                  };
                  if(tracking.has(s[left])) {
                      tracking.set(s[left], (tracking.get(s[left]) || 0) + 1);
                      if(tracking.get(s[left])! > 0) count-=1;
                  } 
                  left++;
              }
          }
      }
  }
  return answer;
}