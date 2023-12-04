
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons

export function findMinArrowShots(points: number[][]): number {

  points.sort((a, b) => (a[1]-b[1] || a[0]-b[0]))

  let result = points.length

  for (let i = 1, j = 0; i < points.length; i++){

    if(i === j){
      continue
    }

    if(points[i][1] >= points[j][1] &&  points[j][1] >= points[i][0]){
      result--
    }else {
      j = i
    }
    
  }

  return result
}

// export function findMinArrowShots(points: number[][]): number {

//   points.sort((a, b) => a[0] - b[0])

//   let result = points.length
//   let start = points[0]

//   for (let i = 1; i < points.length; i++){
//     const current = points[i]

//     if(start[1] >= current[0]){
//       result--
//       start = [Math.max(start[0], current[0]), Math.min(start[1], current[1])]
//     }else {
//       start = current.slice()
//     }
    
//   }

//   return result
// }