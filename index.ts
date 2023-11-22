import { findRadius } from "./solutions/findRadius";
import { execute } from "./helpers/performance";

function findLongestWord(s: string, dictionary: string[]): string {

    let result = ''

    for (const dict of dictionary){
      if(dict.length > s.length){
        continue
      }

      let isExist = true
      const strMap = getCountMap(s)

      for (const char of dict){
        const count = strMap.get(char)

        if(!count){
          isExist = false
          break
        }

        strMap.set(char, count - 1)
      }

      if(isExist){
        if(result.length === dict.length){
          result = result > dict ? dict : result
          continue
        }
  
        result = result.length > dict.length ? result : dict
      }
    }

    return result
};

function getCountMap (str: string) {
  const map = new Map<string, number>()

  for (const s of str){
    map.set(s, (map.get(s) || 0) + 1)
  }

  return map
}


execute(() => findLongestWord("aewfafwafjlwajflwajflwafj", ["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"]))
