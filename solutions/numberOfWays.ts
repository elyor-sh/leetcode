
// https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/description

export function numberOfWays(corridor: string): number {
  let totalS = 0, temp = 0, ans = 1, count = 0
  for (let i = 0; i < corridor.length; i++) {
      if (corridor[i] === 'S') {
          if (temp > 0) {
              ans = (ans * temp) % (10 ** 9 + 7)
              temp = 0
              count = 0
          }
          totalS++
          count++
      }
      if (count === 2) {
          temp++
      }
  }
  return totalS > 0 && totalS % 2 === 0 ? ans : 0
};