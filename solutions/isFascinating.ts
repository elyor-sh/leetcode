
// https://leetcode.com/problems/check-if-the-number-is-fascinating/description/

export function isFascinating(n: number): boolean {

    const num2 = n * 2
    const num3 = n * 3

    const numStr = n.toString() + num2.toString() + num3.toString()

    if(numStr.includes('0') || numStr.length !== 9){
        return false
    }

    for (let i = 1; i <=9; i++ ){
        const iStr = i.toString()
        if(!numStr.includes(iStr)){
            return false
        }
    }

    return true
}