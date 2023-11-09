
// https://leetcode.com/problems/count-prefixes-of-a-given-string/description/

export function countPrefixes(words: string[], s: string): number {
    let count = 0

    for (const word of words){
        if(word.length > s.length){
            continue
        }

        const str = s.slice(0, word.length)

        if(str === word){
            count++
        }
    }

    return count
};