
// https://leetcode.com/problems/count-items-matching-a-rule/description/

export function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  let count = 0

  const orders: Record<string, number> = {
    type: 0,
    color: 1,
    name: 2
  }

  const order = orders[ruleKey]

  for (const item of items){
    if(item[order] === ruleValue){
      count++
    }
  }

  return count
};