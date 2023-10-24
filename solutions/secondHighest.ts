
// https://leetcode.com/problems/second-largest-digit-in-a-string/description/

export function secondHighest(s: string): number {
  const set = new Set<number>();
  for (const c of s) {
      if (c >= "0" && c <= "9") {
          set.add(+c);
      }
  }
  return Array.from(set).sort((a, b) => b - a)[1] ?? -1;
}