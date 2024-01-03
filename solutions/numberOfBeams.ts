
// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/

export function numberOfBeams(bank: string[]): number {
   
  const onesMap: number[] = []

  for (const item of bank){
   const onesCount = getOnesCount(item)
   if(onesCount > 0){
     onesMap.push(onesCount)
   }
  }

  if(onesMap.length < 2){
   return 0
  }

  let count = 0

  for (let i = 0; i < onesMap.length - 1; i++){
   count += onesMap[i] * onesMap[i + 1]
  }
  
  return count
};

function getOnesCount (str: string): number {
 let count = 0

 for (const char of str){
   if(char === '1'){
     count++
   }
 }

 return count
}

// export function numberOfBeams(bank: string[]): number {
//   let count = 0
  
//   const onesMap = new Map<number, number>()

//   for (let i = 0; i < bank.length; i++){
//      onesMap.set(i, getOnesCount(bank[i]))
//   }

//   for (let i = 0; i < bank.length - 1; i++){
//    for (let j = i + 1; j < bank.length; j++){
//      if(onesMap.get(j) !== 0){
//        count += (onesMap.get(i)! * onesMap.get(j)!)
//        break;
//      }
//    }
//   }
  
//   return count
// };

// function getOnesCount (str: string): number {
//  let count = 0

//  for (const char of str){
//    if(char === '1'){
//      count++
//    }
//  }

//  return count
// }