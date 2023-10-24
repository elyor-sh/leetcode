
// https://leetcode.com/problems/path-crossing/description/

export function isPathCrossing(path: string): boolean {

  const set = new Set<string>()

  let x = 0
  let y = 0

  const setSet = () => set.add(`${x}+${y}`)
  const getSet = () => set.has(`${x}+${y}`)

  setSet()

  const dir = {
    N: [0, 1],
    S: [0, -1],
    E: [1, 0],
    W: [-1, 0]
  }
  

  for (const p of path){
    const ac = dir[p as keyof typeof dir]
    x = x + ac[0]
    y = y + ac[1]
    

    if(getSet()){
      return true
    }

    setSet()
  }

  return false
};