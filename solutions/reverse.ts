
// https://leetcode.com/problems/reverse-integer/description/

export function reverse(x: number): number {
    const reverseStr = (str: string) => {
        let reversed = ''

        for (const l of str){
            reversed = l + reversed
        }

        return reversed
    }

    const reversedX = Number(reverseStr(Math.abs(x).toString()))

    if(reversedX > 0x7FFFFFFF){
        return 0
    }

    return x > 0 ? reversedX : -reversedX
}