import { execute } from "./helpers/performance";
import {NumMatrix} from "./solutions/304.NumMatrix";

execute(() => {
  const num = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]])
  console.log(num.sumRegion(2, 1, 4, 3));
});