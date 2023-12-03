
// https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

export class WordDictionary {

  hash: Set<string>

  constructor() {
      this.hash = new Set()
  }

  addWord(word: string): void {
      this.hash.add(word)
  }

  search(word: string): boolean {

    if(!word.includes('.')){
      return this.hash.has(word)
    }

    for (let wordA of this.hash) {
      if(wordA.length === word.length) {
          let matches: boolean = true;

          for (let i = 0; i < word.length; i++) {
              if(word[i] !== '.' && word[i] !== wordA[i]) {
                  matches = false;
                  break;
              };
          }

          if(matches) return true;
      }
  }

     return false
  }
}