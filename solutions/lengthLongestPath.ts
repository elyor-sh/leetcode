
// https://leetcode.com/problems/longest-absolute-file-path/description/

export function lengthLongestPath(input: string): number {

  let stack: string[] = [];

  const paths = input.split('\n');

  let max = 0;

  for (let path of paths) {

      const parts = path.split('\t');
      const level = parts.length - 1;
      stack = stack.slice(0, level + 1);
      stack[level] = parts[parts.length - 1];
      
      if (parts[parts.length - 1].indexOf('.') > -1) {
          max = Math.max(stack.join('/').length, max);
      }

  }

  return max;
};