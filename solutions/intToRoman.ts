
// https://leetcode.com/problems/integer-to-roman/description/

export function intToRoman(num: number): string {

    const roman = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }

    let result = ''

    const thousands = Math.floor(num / 1000)
    const hundreds = Math.floor((num - thousands * 1000) / 100)
    const tens = Math.floor((num - thousands * 1000 - hundreds * 100) / 10)
    const ones = Math.floor(num - thousands * 1000 - hundreds * 100 - tens * 10)

    result = roman['1000'].repeat(thousands)

    const setRoman = (unit: number, first: string, second: string, third: string) => {
        if(unit < 4){
            result += first.repeat(unit)
        }

        if(unit === 4){
            result += first + second
        }


        if(unit >= 5 && unit <= 8){
            result += second + first.repeat(unit - 5)
        }

        if(unit > 8){
            result += first + third
        }
    }

    setRoman(hundreds, roman['100'], roman['500'], roman['1000'])
    setRoman(tens, roman['10'], roman['50'], roman['100'])
    setRoman(ones, roman['1'], roman['5'], roman['10'])

    return result
}