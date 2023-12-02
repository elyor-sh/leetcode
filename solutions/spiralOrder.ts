
// https://leetcode.com/problems/spiral-matrix/description

export function spiralOrder(matrix: number[][]): number[] {

  function drive(lastPosition: number[], direction: number[]): number[] {
    const yDir = direction[0];
    const xDir = direction[1];
    for (
      let i = lastPosition[0], j = lastPosition[1];
      i < matrix.length && i > -1 && j < matrix[i].length && j > -1;
      i += yDir, j += xDir
    ) {
      const key = `${i}+${j}`;
      if (visited.has(key)) break;
      lastPosition = [i, j];
      ans.push(matrix[i][j]);
      visited.add(key);
    }
  
    return lastPosition;
  }

	const ans: number[] = [],
		visited: Set<string> = new Set<string>(),
		directionQueue = [
			[0, 1], 
			[1, 0], 
			[0, -1], 
			[-1, 0], 
		];
	
	let laststopPosition: number[] = [0, -1];
	let numberOfElements:number = matrix.length * matrix[0].length;

	while (ans.length !== numberOfElements) {
		let direction: number[] = directionQueue.shift()!;
		laststopPosition[0] += direction[0];
		laststopPosition[1] += direction[1];
		laststopPosition = drive(laststopPosition, direction!);
		directionQueue.push(direction!);
	}

	return ans;
}