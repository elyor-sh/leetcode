
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

export function subtractProductAndSum(n: number): number {
    const numStr = n.toString()

    let sum = 0
    let multiply = 1

    for (const s of numStr){
        const num = Number(s)
        sum += num
        multiply *= num
    }

    return multiply - sum
}