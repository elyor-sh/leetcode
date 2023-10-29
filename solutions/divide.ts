
// https://leetcode.com/problems/divide-two-integers/description/

export function divide(dividend: number, divisor: number): number {

    const max = 2147483647
    const min = -2147483648
    const check32 = (num: number) => {
        return (num > min && num < max) ? num : num < 0 ? min : max
    }

    if(divisor === 1){
        return check32(dividend)
    }

    if(divisor === -1){
        return check32(-dividend)
    }

    let result = 0

    let absDividend = Math.abs(dividend)
    const absDivisor = Math.abs(divisor)

    while (absDividend >= absDivisor){
        absDividend -= absDivisor
        result++
    }

    if((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)){
        result = -result
    }

    return check32(result)
}