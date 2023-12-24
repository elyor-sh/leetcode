
// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/

export function findWinners(matches: number[][]): number[][] {

    const wMap = new Map<number, number>()
    const lMap = new Map<number, number>()

    matches.forEach(match => {
        wMap.set(match[0], (wMap.get(match[0]) || 0) + 1)
        lMap.set(match[1], (lMap.get(match[1]) || 0) + 1)
    })

    const losers: number[] = []

    for (const [key, value] of lMap){
        wMap.delete(key)
        if(value === 1){
            losers.push(key)
        }
    }

    const winners: number[] = []

    for (const [key, value] of wMap){
        winners.push(key)
    }

    winners.sort((a, b) => a - b)
    losers.sort((a, b) => a - b)
    return [winners, losers]
}