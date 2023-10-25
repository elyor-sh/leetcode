
// https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

export function checkIfPangram(sentence: string): boolean {
  return new Set(sentence.split("")).size == 26;
};