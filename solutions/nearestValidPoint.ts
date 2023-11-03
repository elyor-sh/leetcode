
// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

export function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let minDist = Number.MAX_SAFE_INTEGER
  let minIndex = -1

  for(let i = 0; i < points.length; i++){

    const [a, b] = points[i]

    if(a !== x && b !== y){
      continue
    }

    const distance = Math.abs(x - a) + Math.abs(y - b)

    if(minDist <= distance){
      continue
    }

    minDist = distance
    minIndex = i
  }

  return minIndex
};