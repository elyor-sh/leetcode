
// https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/description

export function minDifficulty(jobDifficulty: number[], d: number): number {
  let arr: number[][] = [];
  for(let i = 0; i < jobDifficulty.length;++i){
      arr[i] = new Array();
      for (let j = 0; j < d+1; ++j){
          arr[i][j] = -1;
      }
  }
  return help(jobDifficulty, d, 0);

  function help(jobDifficulty: number[], d: number, index: number){
      if(jobDifficulty.length<d)return -1;
      if(d==1){
          let min = 0;
          for(let i = index; i < jobDifficulty.length;++i){
              min = Math.max(min, jobDifficulty[i]);
          }
          arr[index][d] = min;
          return min;
      }
      if(arr[index][d]!=-1)return arr[index][d];
      let max = 0;
      let minCost = Number.MAX_SAFE_INTEGER;
      for (let i = index; i < jobDifficulty.length-d+1;++i){
          max = Math.max(jobDifficulty[i],max);
          minCost = Math.min(minCost,max+help(jobDifficulty, d-1,i+1));
      }
      return arr[index][d]=minCost;
  }
};