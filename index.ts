import { execute } from "./helpers/performance";

function findPairs(nums: number[], k: number): number {
    const map = new Map<number, number>()
    let count = 0

    for (const num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }

    for (const [key, value] of map){
        if(map.get(key + k)){
            count += (k !== 0 || value > 1) ? 1 : 0
        }
    }

    return count
}
execute(() => findPairs( [1,1,1,2,2], 0))
