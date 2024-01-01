
// https://leetcode.com/problems/lexicographical-numbers/description/

export function lexicalOrder(n: number): number[] {
    const arr: number[] = []

    for (let i = 1; i <= n; i++){
        arr.push(i)
    }

    return arr.sort()
}