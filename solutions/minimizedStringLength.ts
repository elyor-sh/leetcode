
// https://leetcode.com/problems/minimize-string-length/description/

export function minimizedStringLength(s: string): number {
  return new Set(s.split('')).size
};