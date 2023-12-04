
// https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/

export function largestGoodInteger(num: string): string {
  let result = ''

  let last = num[0]
  let freq = 1

  for (let i = 1; i < num.length; i++){
    const char = num[i]

    if(last === char){
      freq++
    }else {
      last = char
      freq = 1
    }

    if(freq === 3){
      const candidate = last.repeat(3)
      result = result > candidate ? result : candidate
    }
  }

  return result
}

// function largestGoodInteger(num: string): string {
//   let result = ''

//   const hash = new Set(['000', '111', '222', '333', '444', '555', '666', '777', '888', '999'])

//   for (let i = 0, j = 3; i < num.length; i++, j++){
//     const sub = num.slice(i, j)
    
//     if(hash.has(sub)){
//       result = result > sub ? result : sub
//     }
//   }

//   return result
// }