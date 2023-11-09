
// https://leetcode.com/problems/largest-local-values-in-a-matrix/description/

export function largestLocal(grid: number[][]): number[][] {

    const m = grid.length
    const n = grid[0].length

    const matrix: number[][] = []

    const getMax = (m: number, n: number) => {
        let max = Number.MIN_SAFE_INTEGER

        for (let i = m - 2; i <= m; i++){
            for (let j = n - 2; j <= n; j++){
                max = Math.max(grid[i][j], max)
            }
        }

        return max
    }

    for (let i = 0; i + 2 < m; i++){
        matrix[i] = []
        for (let j = 0; j + 2 < n; j++){
            matrix[i][j] = getMax(i + 2, j + 2)
        }
    }

    return matrix
};