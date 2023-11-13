
// https://leetcode.com/problems/combination-sum/description/

export function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  const bt = (i: number, path: number[], sum: number): void => {
      if (sum >= target) {
          if (sum === target) result.push([...path])

          return
      }

      for (let j = i; j < candidates.length; j++) {
          path.push(candidates[j])
          bt(j, path, sum + candidates[j])
          path.pop()
      }
  }

  bt(0, [], 0)

  return result
}