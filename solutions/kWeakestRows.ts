
// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/description/


type Type = {
  key: number
  value: number
}

export function kWeakestRows(mat: number[][], k: number): number[] {

  let tmp: Type[] = []

  for (let i = 0; i < mat.length; i++){
    const cur = mat[i]
    const sum = cur.reduce((acc, item) => acc += item, 0)
    tmp.push({key: i, value: sum})
  }

  tmp.sort((a, b) => a.value === b.value ? a.key - b.key : a.value - b.value)


  return tmp.slice(0, k).map(item => item.key)
};