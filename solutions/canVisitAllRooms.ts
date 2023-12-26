
// https://leetcode.com/problems/keys-and-rooms/description/

export function canVisitAllRooms(rooms: number[][]): boolean {

  const visitedRooms = new Set<number>()

  const bfs = (i: number) => {

    if(i >= rooms.length || visitedRooms.has(i)){
      return
    }

    visitedRooms.add(i)

    const roomKeys = rooms[i]

    roomKeys.forEach(key => {
      bfs(key)
    })
  }

  bfs(0)

  return visitedRooms.size === rooms.length
};