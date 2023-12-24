
// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/

export function minSteps(s: string, t: string): number {

    const sMap = new Map<string, number>()

    for (const char of s){
        sMap.set(char, (sMap.get(char) || 0) + 1)
    }

    const tMap = new Map<string, number>()

    for (const char of t){
        tMap.set(char, (tMap.get(char) || 0) + 1)
    }

    let count = 0

    for (const [key, value] of sMap){
        const tVal = tMap.get(key) || 0

        if(tVal < value){
            count += value - tVal
        }
    }

    return count
}