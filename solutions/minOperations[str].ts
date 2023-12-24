
// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description/

export function minOperations(s: string): number {
    let count = 0

    for (let i = 0; i < s.length; i++){
        if(i % 2 === 0){
            if(s[i] === '1'){
                count++
            }
        }else {
            if(s[i] === '0'){
                count++
            }
        }
    }

    return Math.min(count, s.length - count)
}