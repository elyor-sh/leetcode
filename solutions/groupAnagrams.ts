
// https://leetcode.com/problems/group-anagrams/description/

export function groupAnagrams(strs: string[]): string[][] {

  const map = new Map<string, string[]>()

  
	strs.forEach((str) =>{

		const key = str.split('').sort().toString();
    
    const found = map.get(key)

    if(found){
      found.push(str)
      map.set(key, found)
    }else {
      map.set(key, [str])
    }
	})

  const result: string[][] = []

  for (const [_, values] of map){
    result.push(values)
  }

	return result
};
