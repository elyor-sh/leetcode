
// https://leetcode.com/problems/zigzag-conversion/description/

export function convert(s: string, numRows: number): string {

  if (numRows === 1) return s;

  const tmp: string[] = new Array(numRows).fill('')
  
  let row = -1
  let asc = true

  for (let i = 0; i < s.length; i++){

    row += asc ? 1 : -1

    const letter = s[i]

    tmp[row] += letter

    if(row === numRows - 1){
      asc = false
    }else if(row === 0){
      asc = true
    }
  
  }
  
  return tmp.join('')
}