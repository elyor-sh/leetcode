
// https://leetcode.com/problems/transpose-matrix/description/

export function transpose(matrix: number[][]): number[][] {
    const [row, col]: number[] = [matrix.length, matrix[0].length];
    const res: number[][] = [];

    for(let i= 0; i < col; i++){
        const arr: number[] = []
        for (let j=0;j<row;j++){
            arr.push(matrix[j][i]);
        }
        res.push(arr);
    }
    return res;
}