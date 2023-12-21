
// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/

export function maxWidthOfVerticalArea(points: number[][]): number {

  points.sort((a, b) => a[0] - b[0])

  let result = 0

  for (let i = 1; i < points.length; i++){

    const prevX = points[i - 1][0]
    const currentX = points[i][0]

    result = Math.max(currentX - prevX, result)

  }

  return result
}