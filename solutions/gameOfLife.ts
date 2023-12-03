
// https://leetcode.com/problems/game-of-life/description/

export function gameOfLife(board: number[][]): void {
    for (let i in board) {
        const row = board[i];
        for (let j in row) {
            const cell = row[j];
            const neighbours = getActiveNeighbourCount(board, +i, +j);

            if (cell === 1) {
                if (neighbours < 2) {
                    board[i][j] = 3;
                } else if (neighbours > 3) {
                    board[i][j] = 3;
                }
            } else if (neighbours === 3) {
                board[i][j] = 2
            }
        }
    }
    for (let row of board) {
        for (let col in row) {
            if (row[col] > 1) {
                row[col] = 3 - row[col];
            }
        }
    }
}

function getActiveNeighbourCount(board: number[][], row: number, col: number): number {
    const neighbours = [
        board[row - 1]?.[col - 1],
        board[row - 1]?.[col],
        board[row - 1]?.[col + 1],
        board[row]?.[col - 1],
        board[row]?.[col + 1],
        board[row + 1]?.[col - 1],
        board[row + 1]?.[col],
        board[row + 1]?.[col + 1],
    ];

    return neighbours.filter(n => n % 2 === 1).length;
}