
// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/description/

export function greatestLetter(s: string): string {

    const lowerHash = new Set<string>()
    const upperHash = new Set<string>()

    for (const char of s){
        if(char.toLowerCase() === char){
            lowerHash.add(char)
        }else {
            upperHash.add(char)
        }
    }

    let result = ''

    for (const upper of upperHash){
        if(lowerHash.has(upper.toLowerCase())){
            if(!result){
                result = upper
            }else {
                result = result > upper ? result : upper
            }
        }
    }

    return result
}