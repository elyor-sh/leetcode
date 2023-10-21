
// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/description/

export function differenceOfSums(n: number, m: number): number {
    let div = 0
    let noDiv = 0

    for (let i = 1; i <= n; i++){
        if(i % m === 0){
            div += i
        }else {
            noDiv += i
        }
    }

    return noDiv - div
}