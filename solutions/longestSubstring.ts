

const getCount = (str: string, start: number, end: number) => {
    const map = new Map<string, number>()

    for (let i = start; i < end; i++){
        const s = str[i]
        const cur = map.get(s) || 0
        map.set(s, cur + 1)
    }

    return map
}
export function longestSubstring(s: string, k: number): number {

    const recursive = (start: number, end: number): number => {
        const map = getCount(s, start, end)
        for (let mid = start; mid < end; mid++) {
            if(map.get(s[mid])! >= k) {
                continue
            }

            let midNext = mid + 1
            while(midNext < end && map.get(s[midNext])! < k){
                midNext++
            }

            return Math.max(recursive(start, mid), recursive(midNext, end))
        }

        return end - start
    }

    return recursive(0, s.length)
}