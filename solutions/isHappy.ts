
// https://leetcode.com/problems/happy-number/description

export function isHappy(n: number): boolean {
  const squares: Record<string, number> = {
      '0':0, '1':1, '2':4, '3':9, '4':16, 
      '5':25, '6':36, '7':49, '8':64, '9':81
  };
  const memo = new Map();
  let temp = n;
  while(!!!memo.get(temp)) {
      temp = temp.toString().split('').reduce((acc, i) => {
          acc += squares[i];
          return acc;
      }, 0);
      if(!memo.has(temp)) memo.set(temp, false)
      else return false;
      if(temp === 1) return true;
  }

  return true
};