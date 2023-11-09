
// https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/

export function findFinalValue(nums: number[], original: number): number {
    
    const hash = new Set<number>(nums)

    const r = (original: number): number => {
        if(hash.has(original)){
            original *= 2
            return r(original)
        }

        return original
    }

    return r(original)
};