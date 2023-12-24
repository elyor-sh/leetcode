
// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/

export function groupThePeople(groupSizes: number[]): number[][] {

    const countMap = new Map<number, number[]>()

    const res: number[][] = []

    groupSizes.forEach((group, i) => {
        let count = countMap.get(group) || []

        count.push(i)

        countMap.set(group, count)

        if(count.length === group){
            res.push(count)
            countMap.delete(group)
        }
    })

    return res;
}