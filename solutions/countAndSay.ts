
// https://leetcode.com/problems/count-and-say/description/

export function countAndSay(n: number): string {

  if(n === 1){
    return '1'
  }

  const getCountAndDigit = (str: string) => {

    let last = str[0]
    let count = 1
    let result = ''

    for (let i = 1; i < str.length; i++){
      if(last === str[i]){
        count++
      }else {
        result = `${result}${count}${last}`
        count = 1
        last = str[i]
      }
    }

    result = `${result}${count}${last}`

    return result
  }
  
   
   const r = (res: string, time: number): string => {
    if(time === n){
      return getCountAndDigit(res)
    }
    
    return r(getCountAndDigit(res), time + 1)
  }

  return r('1', 2)
};