
// https://leetcode.com/problems/number-of-senior-citizens/description/

export function countSeniors(details: string[]): number {
    let count = 0

    for (const detail of details){
        if(Number(detail[11] + detail[12]) > 60){
            count++
        }
    }

    return count
}
