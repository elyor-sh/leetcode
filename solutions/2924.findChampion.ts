
// https://leetcode.com/problems/find-champion-ii/

export function findChampion(n: number, edges: number[][]): number {

    if(!edges.length && n === 1){
        return 0
    }

    const degrees = new Map<number, Set<number>>()
    degrees.set(0, new Set())
    degrees.set(1, new Set())

    for (const [u, v] of edges){
        const zeroDegree = degrees.get(0)!
        const oneDegree = degrees.get(1)!

        zeroDegree.delete(v)
        oneDegree.add(v)

        if(!oneDegree.has(u)){
            zeroDegree.add(u)
        }
    }

    const zeroDegree = degrees.get(0)!
    const oneDegree = degrees.get(1)!

    if(zeroDegree.size + oneDegree.size < n){
        return -1
    }

    if(zeroDegree.size === 1){
        return Array.from(zeroDegree)[0]
    }

    return -1
}

