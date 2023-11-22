
// https://leetcode.com/problems/diagonal-traverse-ii/description

export function findDiagonalOrder(nums: number[][]): number[] {
  const result: number[] = []

  const stack: number[][] = [[0, 0]]

  while (stack.length > 0){
    const grid = stack.shift()!
    const row = grid[0]
    const col = grid[1]

    result.push(nums[row][col])

    if(col === 0 && row + 1 < nums.length){
      stack.push([row + 1, col])
    }

    if(col + 1 < nums[row].length){
      stack.push([row, col + 1])
    }
  }

 return result
};