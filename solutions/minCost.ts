
// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/description

export function minCost(colors: string, neededTime: number[]): number {

  let minCost = 0;
  
  for(let i = colors.length - 2; i >= 0;i--){
      if(colors[i] == colors[i+1]){
          if(neededTime[i] < neededTime[i+1]){
              minCost+= neededTime[i];
              [neededTime[i], neededTime[i + 1]] = [neededTime[i + 1], neededTime[i]];
          }else{
              minCost+= neededTime[i + 1];   
          }
      }
  }
  return minCost
}