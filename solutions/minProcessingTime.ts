
// https://leetcode.com/problems/minimum-processing-time/description/

export function minProcessingTime(processorTime: number[], tasks: number[]): number {
  processorTime.sort((a, b) => a - b);
  tasks.sort((a, b) => b - a);

  const m: number = tasks.length;

  let res: number = 0;
  let k: number = 0;

  for (let i = 0; i < m; i += 4) {
      const p: number = processorTime[k];
      res = Math.max(res, p + tasks[i], p + tasks[i + 1], p + tasks[i + 2], p + tasks[i + 3]);
      k++;
  }

  return res;
};