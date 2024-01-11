
//https://leetcode.com/problems/find-eventual-safe-states/description/

export function eventualSafeNodes(graph: number[][]): number[] {
  const ans: number[] = []

  const visited: Set<number> = new Set();
  const currentStack: Set<number> = new Set();

  const isSafeNode = (node: number): boolean => {
      if(currentStack.has(node)) return false;

      if(visited.has(node)) return true;

      visited.add(node);
      currentStack.add(node);

      for (let nextNode of (graph[node] || [])) {
          if(!isSafeNode(nextNode)) return false;
      }

      currentStack.delete(node);
      return true;
  }

  for (let i = 0; i < graph.length; i++) {
      isSafeNode(i);
  }
  

  for (let i = 0; i < graph.length; i++) {
      if(!currentStack.has(i)) {
        ans.push(i);
      }
  }

  return ans;
};