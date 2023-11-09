
// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/

export function minimumOperations(nums: number[]): number {
    let count = 0

    const getMin = (nums: number[]) => {
        
        let min = Number.MAX_SAFE_INTEGER
        for (const num of nums){
            if(num > 0 ){
                min = Math.min(num, min)
            }
        }

        return min
    }

    const hash = new Set(nums.filter(num => num > 0))

    const recursive = (hash: Set<number>): number => {
        if(hash.size === 0){
            return count
        }

        count++

        const min = getMin(Array.from(hash))
        const newHash = new Set<number>()
        

        for (const value of hash.values()){
            
            if(value - min > 0 ){
                newHash.add(value - min)
            }
        }
    

        return recursive(newHash)
    }

    return recursive(hash)
};