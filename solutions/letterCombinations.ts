
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

export function letterCombinations(digits: string): string[] {

    if(!digits.length){
        return []
    }

    const digitNums = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    type TKeyOfDigits = keyof typeof digitNums

    const result: string[] = []

    const recursive = (combination: string, digits: string) => {
        if(digits.length === 0){
            result.push(combination)
        }else {
            const letters = digitNums[digits[0] as TKeyOfDigits]
            for (const letter of letters){
                recursive(combination + letter, digits.slice(1))
            }
        }
    }

    recursive('', digits)

    return result
}