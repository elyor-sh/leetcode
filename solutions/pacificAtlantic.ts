
// https://leetcode.com/problems/pacific-atlantic-water-flow/description/

export function pacificAtlantic(heights: number[][]): number[][] {
  const m: number = heights.length;
  const n: number = heights[0].length;

  if (m == 0 || n == 0) return [];

  const isValidCell = (m: number, n: number, x: number, y: number): boolean => {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  const directions: [number, number][] = [
    [1, 0],  // right
    [0, 1],  // bottom
    [-1, 0], // left
    [0, -1], // top
  ];

  const queueAthlantic: [number, number][] = [];
  const queuePacific: [number, number][] = [];

  for (let i = 0; i < m; i++) {
    queuePacific.push([i, 0]);
    queueAthlantic.push([i, n - 1]); 
  }

  for (let i = 0; i < n; i++) {
    queuePacific.push([0, i]);
    queueAthlantic.push([m - 1, i]); 
  }

  const bfs = (matrix: typeof heights, queue: [number, number][]): Map<string, [number, number]> => {
    const reachable: Map<string, [number, number]> = new Map();

    while (queue.length > 0) {
      const [x, y] = queue.shift()!;
      reachable.set(`${x}-${y}`, [x, y]);

      for (const [shiftX, shiftY] of directions) {
        const nextX: number = x + shiftX;
        const nextY: number = y + shiftY;
        if (
          ! reachable.has(`${nextX}-${nextY}`) &&
          isValidCell(m, n, nextX, nextY) &&
          matrix[x][y] <= matrix[nextX][nextY]
        ) {
          queue.push([nextX, nextY]);
        }
      }
    }

    return reachable;
  }

  const reachablePacific: Map<string, [number, number]> = bfs(heights, queuePacific);
  const reachableAthlantic: Map<string, [number, number]> = bfs(heights, queueAthlantic);

  const result: number[][] = [];
  for (const coords of reachablePacific.keys()) {
    if (reachableAthlantic.has(coords)) {
      result.push(reachableAthlantic.get(coords)!);
    }
  }

  return result;
}