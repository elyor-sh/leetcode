
// https://leetcode.com/problems/all-paths-from-source-to-target/description/

export function allPathsSourceTarget(graph: number[][]): number[][] {

  const start = 0
  const end = graph.length - 1

  const result: number[][] = []

  const paths: Record<number, number[]> = {}

  for (let i = 0; i < graph.length; i++){
    paths[i] = graph[i]
  }

  function dfs (point: number, path: number[]) {
    if(!paths[point]){
      return
    }

    const active = graph[point]

    for (const p of active){
      const newPath = path.slice()
      newPath.push(p)
      if(p === end){
        result.push(newPath)
      }else {
        dfs(p, newPath)
      }
    }
  }

  dfs(start, [start])

  return result
};