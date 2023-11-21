
// https://leetcode.com/problems/combination-sum-ii/description/

export function combinationSum2(candidates: number[], target: number): number[][] {
    
  const result: number[][] = []

  candidates.sort((a, b) => a - b)

  const dfs = (i: number, candidates: number[], target: number, slate: number[]) => {

    if(target < 0){
      return
    }

    if(target === 0){
      result.push(slate.slice())
      return
    }

    for (let j = i; j < candidates.length; j++){
      if(i !== j && candidates[j] === candidates[j - 1]) continue;
      slate.push(candidates[j])
      dfs(j + 1, candidates, target - candidates[j], slate)
      slate.pop()
    }
  }

  dfs(0, candidates, target, [])


  return result
}