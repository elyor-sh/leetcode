
// https://leetcode.com/problems/multiply-strings/description/

export function multiply(num1: string, num2: string): string {
  if(num1 == "0" || num2 == "0") return "0";
  let rows = [];
  let longest = 0;
  for(let j = num2.length - 1, k = 0; j >= 0; j--, k++) {
      let carry = 0;
      let row = "";
      for(let i = num1.length - 1; i >= 0; i--) {
          let prod = Number(num1[i]) * Number(num2[j]) + carry;
          row = prod % 10 + row;
          carry = Math.floor(prod / 10);
      }
      if(carry != 0) row = carry + row;
      row += "0".repeat(k);
      longest = Math.max(longest, row.length);
      rows.push(row);
  }
  let total = "";
  let carry = 0;
  for(let i = 0; i < longest; i++) {
      let sum = carry;
      rows.forEach(row => {
          let val = Number(row[row.length - 1 - i]);
          sum += isNaN(val) ? 0 : val;
      });
      carry = Math.floor(sum / 10);
      total = sum % 10 + total;
  }
  if(carry != 0) total = carry + total;
  
  return total;
};