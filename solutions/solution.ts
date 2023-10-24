
// https://leetcode.com/problems/first-bad-version/description/

export const solution = (isBadVersion: (p: number) => boolean) => {

  return function(n: number): number {

    let low = 1
    let high = n

    while(low <= high) {
      const mid = Math.floor((low + high) / 2)

      const ans = isBadVersion(mid)

      if(ans) {
        high = mid - 1
      }else {
        low = mid + 1
      }
    }

      return low
  };
};