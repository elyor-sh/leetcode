
// https://leetcode.com/problems/destination-city/description/

export function destCity(paths: string[][]): string {
  const filtered: string[][] = []

  for (let i = 0; i < paths.length; i++){
    const cur = paths[i]
    let isInclude = false
    for (let j = 0; j < paths.length; j++){
      if(i === j){
        continue
      }

      if(cur[1] === paths[j][0]){
        isInclude = true
      }
    }

    if(!isInclude){
      filtered.push(cur)
    }
  }
  

  const last = filtered[filtered.length - 1]
  return last[last.length - 1]
};