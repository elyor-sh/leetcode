
// https://leetcode.com/problems/find-the-maximum-achievable-number/description/

export function theMaximumAchievableX(num: number, t: number): number {
    let x = num

    for (let i = 0; i < t; i++){
        x += 2
        num++

        if(x === num){
            return x
        }
    }

    return x
}