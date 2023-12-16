
// https://leetcode.com/problems/time-based-key-value-store

type Values = {
    time: number
    value: string
}
export class TimeMap {

    map: Map<string, Values[]>
    constructor() {
        this.map = new Map()
    }

    set(key: string, value: string, timestamp: number): void {
        const val = this.map.get(key) || []
        val.push({time: timestamp, value})
        val.sort((a, b) => a.time - b.time)
        this.map.set(key, val)
    }

    get(key: string, timestamp: number): string {
        const val = this.map.get(key)

        if(!val){
            return ''
        }

        let low = 0
        let high = val.length - 1

        while(low <= low){
            const middle = Math.floor((low + high) / 2)

            const current = val[middle]
            const next = val[middle + 1]

            if(current.time === timestamp){
                return current.value
            }

            if(current.time < timestamp && (!next || next?.time > timestamp)){
                return current.value
            }

            if(current.time > timestamp){
                high = middle - 1
            }else {
                low = middle + 1
            }
        }

        return ''
    }
}