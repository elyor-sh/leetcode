
// https://leetcode.com/problems/implement-trie-prefix-tree/description/

export class Trie {
    
  hash: Set<string>

  constructor() {
      this.hash = new Set()
  }

  insert(word: string): void {
      this.hash.add(word)
  }

  search(word: string): boolean {
      return this.hash.has(word)
  }

  startsWith(prefix: string): boolean {
      for (const key of this.hash.keys()){
          if(key.startsWith(prefix)){
              return true
          }
      }

      return false
  }
}