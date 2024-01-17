import { execute } from "./helpers/performance";
import { NumArray } from "./solutions/303.NumArray";

class NumMatrix {
  constructor(matrix: number[][]) {
      
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
      return 0
  }
}



execute(() => {
  const num = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]])
  console.log(num.sumRegion(2, 1, 4, 3));
});