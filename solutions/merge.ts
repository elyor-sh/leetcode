
// https://leetcode.com/problems/merge-intervals/description/

export function merge(intervals: number[][]): number[][] {
  const result: number[][] = []

  intervals.sort((a, b) => a[0] - b[0])

  result.push(intervals[0])
  

  for (let i = 1; i < intervals.length; i++){
    const last = result[result.length - 1]

    const leftI = intervals[i][0]

    if(leftI > last[1]){
      result.push(intervals[i])
    }else {
      last[0] = Math.min(intervals[i][0], last[0])
      last[1] = Math.max(intervals[i][1], last[1])

      result[result.length - 1] = last
    }
  }
  

  return result
};