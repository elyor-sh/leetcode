
// https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/description/

export function maxCount(banned: number[], n: number, maxSum: number): number {
    const hashBanned = new Set(banned)

    let count = 0
    let sum = 0

    for (let i = 1; i <= n; i++){

        if(hashBanned.has(i)){
            continue
        }

        sum += i

        if(sum > maxSum){
            return count
        }

        count++

    }

    return count
}