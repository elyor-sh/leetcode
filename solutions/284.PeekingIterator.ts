
// https://leetcode.com/problems/peeking-iterator/description/

class Iterator {

    // @ts-ignore
    hasNext(): boolean {}
    // @ts-ignore
    next(): number {}
}


export class PeekingIterator {

    private items: number[]
    private point: number

    constructor(iterator: Iterator) {
        this.items = []
        this.point = 0
        this.regenerate(iterator)
    }

    peek(): number {
        return this.items[this.point]
    }

    next(): number {
        this.point++
        return this.items[this.point - 1]
    }

    hasNext(): boolean {
        return this.items[this.point] !== undefined
    }

    private regenerate (iterator: Iterator) {
        let item: number | undefined = iterator.next()
        while (item !== undefined){
            this.items.push(item)
            if(iterator.hasNext()){
                item = iterator.next()
            }else {
                item = undefined
            }
        }
    }
}