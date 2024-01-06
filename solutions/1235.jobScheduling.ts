
// https://leetcode.com/problems/maximum-profit-in-job-scheduling/

export function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    // function to perform a binary search in the DP array
    // finds the latest job that does not conflict with the current one
    const binarySearch = (jobs: [number, number][], start: number): number => {
        let lo = 0, hi = jobs.length - 1;
        while (lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            if (jobs[mid][0] <= start) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return hi;
    };

    // Create and sort the jobs based on their end times
    const jobs = startTime.map((start, i) => [start, endTime[i], profit[i]])
        .sort((a, b) => a[1] - b[1]);

    // Initialize the DP array with a dummy job
    const dp: [number, number][] = [[0, 0]];  // Each element is a tuple of (endTime, profit)

    // Iterate through the sorted jobs and update the DP array
    for (const [start, end, prof] of jobs) {
        const i = binarySearch(dp, start);
        const maxProfit = dp[i][1] + prof;
        if (maxProfit > dp[dp.length - 1][1]) {
            dp.push([end, maxProfit]);
        }
    }

    // The result is the profit in the last element of the DP array
    return dp[dp.length - 1][1];
}