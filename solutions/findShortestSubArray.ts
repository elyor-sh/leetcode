
// https://leetcode.com/problems/degree-of-an-array/description/

type TCounter = {
    firstIndex: number
    count: number
    lastIndex: number
}

export function findShortestSubArray(nums: number[]): number {

    let maxValue = 0
    let counter = new Map<number, TCounter>()
    let minSubLength = nums.length
    let current = nums[0]

    for (let i = 0; i < nums.length; i++){

        let cntr = counter.get(nums[i])

        if (!cntr){
            cntr = {
                firstIndex: i,
                lastIndex: i,
                count: 1
            }

            counter.set(nums[i], cntr)
            continue
        }

        cntr.count++
        cntr.lastIndex = i

        if(cntr.count > maxValue){
            maxValue = cntr.count
            minSubLength = cntr.lastIndex - cntr.firstIndex
            current = nums[i]
        } else if (cntr.count === maxValue && cntr.lastIndex - cntr.firstIndex < minSubLength) {
            minSubLength = cntr.lastIndex - cntr.firstIndex
            current = nums[i]
        }
    }

    const result = counter.get(current)

    if(!result) return 0

    return result.lastIndex - result.firstIndex + 1
}