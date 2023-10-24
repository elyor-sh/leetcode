
// https://leetcode.com/problems/design-an-ordered-stream/description/

export class OrderedStream {

  map: Map<number, string>
  n: number

  returnedVal: number = 1

  constructor(n: number) {
    this.map = new Map()
    this.n = n
  }

  insert(idKey: number, value: string): string[] {

    if(idKey > this.n){
      return []
    }

    this.map.set(idKey, value)
    return this.inserted(idKey)
  }

  inserted (id: number): string[] {

    if(id > this.returnedVal){
      return []
    }

    const result: string[] = []

    for (let i = this.returnedVal; i <= this.n; i++) {
       const cur = this.map.get(i)

       if(cur){
        result.push(cur)
        this.returnedVal++
       }else {
        break;
       }
    }

    return result
  }
}

// const log = (...p: any) => console.log(...p)


// execute(() => {
//   const os = new OrderedStream(5)
//   log(os.insert(3, 'ccccc'))
//   log(os.insert(1, 'aaaaa'))
//   log(os.insert(2, 'bbbbb'))
//   log(os.insert(5, 'eeeee'))
//   log(os.insert(4, 'dddddd'))
// });