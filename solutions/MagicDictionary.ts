
// https://leetcode.com/problems/implement-magic-dictionary/description/

export class MagicDictionary {

    map: Map<number, string[]>
    constructor() {
        this.map = new Map()
    }

    buildDict(dictionary: string[]): void {
        dictionary.forEach(dict => {
            const words = this.map.get(dict.length) || []
            words.push(dict)
            this.map.set(dict.length, words)
        })
    }

    search(searchWord: string): boolean {

        const words = this.map.get(searchWord.length)

        if(!words){
            return false
        }

        for (const word of words){
            let diff = 0
            for (let i = 0; i < word.length; i++){
                if(word[i] !== searchWord[i]){
                    diff++
                }

                if(diff > 1){
                    break
                }
            }

            if(diff === 1){
                return true
            }
        }

        return false
    }

}