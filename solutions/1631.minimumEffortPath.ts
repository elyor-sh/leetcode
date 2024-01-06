
// https://leetcode.com/problems/path-with-minimum-effort/description/

export function minimumEffortPath(heights: number[][]): number {
    const n: number = heights.length;
    const m: number = heights[0].length;

    const directions: [number, number][] = [
        [1, 0], // right
        [0, 1],  // bottom
        [-1, 0], // left
        [0, -1], // top
    ];

    const isValidCell = (x: number, y: number): boolean => {
        return x >= 0 && x < n && y >= 0 && y < m;
    }

    const canReachDestination = (x: number, y: number, mid: number, visited = new Set()): boolean => {
        if (x == n - 1 && y == m - 1) return true;
        visited.add(`${x}-${y}`);

        for (const [dx, dy] of directions) {
            const nextX = x + dx;
            const nextY = y + dy;
            if (! isValidCell(nextX, nextY) || visited.has(`${nextX}-${nextY}`)) {
                continue;
            }

            const currentDiff = Math.abs(heights[nextX][nextY] - heights[x][y]);
            if (currentDiff <= mid && canReachDestination(nextX, nextY, mid, visited)) {
                return true;
            }
        }

        return false;
    }

    let left: number = 0;
    let right: number = Math.pow(10, 6);
    while (left < right) {
        // We want to check if the path exist with an effort <= mid
        const mid: number = Math.floor((left + right) / 2);
        const visited: Set<string> = new Set();
        // each time we start from start point [0][0] and trying to reach the point [n - 1][m - 1]
        if (canReachDestination(0, 0, mid, visited)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}