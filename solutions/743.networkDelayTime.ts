
// https://leetcode.com/problems/network-delay-time/description/

export function networkDelayTime(times: number[][], n: number, k: number): number {
  const spt: Set<number> = new Set()
  const dist: number[] = new Array(n).fill(Infinity)
  dist[k-1] = 0

  while (spt.size !== n) {
    const {el, minEl} = getMinEl(dist, spt)
    if (el === Infinity) return -1
    spt.add(minEl)
    const adjacentEls = getAdjacentEls(times, minEl, spt)
    updateDist(dist, adjacentEls, minEl)
  }

  if (dist.some(e => e === Infinity)) return -1
  return Math.max(...dist)
};

function getMinEl(dist: number[], except: Set<number>) {
  let min = Infinity
  let index = 0
  for (let i = 0; i < dist.length; i++) {
    if (except.has(i+1)) continue
    if (dist[i] < min) {
      min = dist[i]
      index = i
    }
  }

  return {el: min, minEl: index + 1}
}

function getAdjacentEls(times: number[][], el: number, except: Set<number>) {
  return times.filter(e => !except.has(e[1]) && e[0] === el)
}

function updateDist(dist: number[], adjacentEls: number[][], el: number) {
  const elDist = dist[el-1]
  adjacentEls.forEach((e) => {
    if (elDist + e[2] < dist[e[1]-1]) {
      dist[e[1]-1] = elDist + e[2]
    }
  })
}