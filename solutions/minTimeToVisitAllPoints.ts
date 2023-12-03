
// https://leetcode.com/problems/minimum-time-visiting-all-points

export function minTimeToVisitAllPoints(points: number[][]): number {
    let ans = 0;
    for (let i = 0; i < points.length - 1; i++) {
        let currX = points[i][0];
        let currY = points[i][1];
        let targetX = points[i + 1][0];
        let targetY = points[i + 1][1];
        ans += Math.max(Math.abs(targetX - currX), Math.abs(targetY - currY));
    }

    return ans;
}