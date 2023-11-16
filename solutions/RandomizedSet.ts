
// https://leetcode.com/problems/insert-delete-getrandom-o1/description/

export class RandomizedSet {

  map: Map<number, number>

  constructor() {
      this.map = new Map()
  }

  insert(val: number): boolean {

      if(this.map.has(val)){
          return false
      }

      this.map.set(val, val)

      return true
  }

  remove(val: number): boolean {
      if(this.map.has(val)){
          this.map.delete(val)
          return true
      }

      return false
  }

  getRandom(): number {
      const random = Math.floor(Math.random() * this.map.size)        

      return [...this.map.values()][random]
  }
}
