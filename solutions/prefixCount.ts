
// https://leetcode.com/problems/counting-words-with-a-given-prefix/description/

export function prefixCount(words: string[], pref: string): number {
    let count = 0

    for (const word of words){
        const str = word.slice(0, pref.length)
        if(str === pref){
            count++
        }
    }

    return count
};