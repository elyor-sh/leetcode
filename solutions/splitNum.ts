
// https://leetcode.com/problems/split-with-minimum-sum/description/

export function splitNum(num: number): number {

  let strNum = [...String(num)].sort().join("")

  let num1 = ""
  let num2 = ""

  for (let i = 0; i < strNum.length; i+=2) {
    num1 += strNum[i]
    num2 += strNum[i + 1] || ""
  }

  return Number(num1) + Number(num2);

};