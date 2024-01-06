
//https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description

export function findMatrix(nums: number[]): number[][] {

    const counter = new Map<number, number>()
    const result: number[][] = []

    nums.forEach(num => {
        let freq = counter.get(num) || 0
        if(!result[freq]){
            result[freq] = []
        }
        result[freq].push(num)
        counter.set(num, freq + 1)
    })

    return result
}
