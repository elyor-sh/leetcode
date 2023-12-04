
// https://leetcode.com/problems/insert-interval

export function insert(intervals: number[][], newInterval: number[]): number[][] {

  const output: number[][] = [];


  for(let i = 0; i < intervals.length; i++) {
  
      if (newInterval[1] < intervals[i][0]) {
          output.push(newInterval);
          intervals.slice(i).forEach(interval => output.push(interval));
          return output;
      }else if (newInterval[0] > intervals[i][1]) {
        output.push(intervals[i])
      }else {
        newInterval = [
          Math.min(newInterval[0], intervals[i][0]),
          Math.max(newInterval[1], intervals[i][1])
      ];
      }
  }

  output.push(newInterval);

  return output;
}