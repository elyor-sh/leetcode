
// https://leetcode.com/problems/edit-distance/description/

export function minDistance(word1: string, word2: string): number {
  if (word1.length == 0) {
      return word2.length
  }
  if (word2.length == 0) {
      return word1.length
  }
  const dp = new Map<string, number>();
  return editDistance(word1, word2, word1.length, word2.length, dp);
};

function editDistance(w1: string, w2: string, i: number, j: number, dp: Map<string, number>): number {

  if (i === 0 && j === 0) {
      return 0
  }

  if (j === 0) {
      return i
  }

  if (i === 0) {
      return j
  }

  let key: string = i + ',' + j;

  if(dp.has(key)){
      return dp.get(key)!;
  }

  if (w1[i - 1] === w2[j - 1]) {
      let r:number = editDistance(w1, w2, i - 1, j - 1, dp);
      dp.set(key, r);
      return r
  }
  

  let dele:number = 1 + editDistance(w1, w2, i - 1, j, dp);
  let ins:number = 1 + editDistance(w1, w2, i, j - 1, dp);
  let rep:number = 1 + editDistance(w1, w2, i - 1, j - 1, dp);

  const result:number = Math.min(dele, ins, rep);

  dp.set(key, result);

  return result
}