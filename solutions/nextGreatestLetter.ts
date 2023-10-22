
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

export function nextGreatestLetter(letters: string[], target: string): string {
    let char = ''

    for (let i = 0; i < letters.length; i++){
        const letter = letters[i]
        const l = letter.charCodeAt(0)

        if(l > target.charCodeAt(0)){
            if(!char){
                char = letter
            }else {
                if(l < char.charCodeAt(0)){
                    char = letter
                }
            }
        }
    }

    return char ? char : letters[0]
}