
// https://leetcode.com/problems/count-symmetric-integers/description/

function getSumOfDigits (str: string) {
    let sum = 0

    for (const s of str){
        sum += Number(s)
    }

    return sum
}

export function countSymmetricIntegers(low: number, high: number): number {

    let count = 0

    while (low <= high){
        const lowStr = low.toString()

        if(lowStr.length % 2 !== 0){
            low++
            continue
        }

        const p1 = getSumOfDigits(lowStr.slice(0, lowStr.length / 2))
        const p2 = getSumOfDigits(lowStr.slice(lowStr.length / 2))

        if(p1 === p2){
            count++
        }

        low++
    }

    return count
}