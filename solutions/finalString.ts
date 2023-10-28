
// https://leetcode.com/problems/faulty-keyboard/description/

export function finalString(s: string): string {
    let result = ''

    for (const letter of s){
        if(letter === 'i'){
            result = reverseStr(result)
        }else {
            result += letter
        }
    }

    return result
}

function reverseStr (str: string): string {
    let reversed = ''

    for (const letter of str){
        reversed = letter + reversed
    }

    return reversed
}
