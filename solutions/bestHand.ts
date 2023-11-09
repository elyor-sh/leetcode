
// https://leetcode.com/problems/best-poker-hand/description/

export function bestHand(ranks: number[], suits: string[]): string {
    let isFlush = true
    for (let i = 1; i<5; i++) {
      if (suits[0] !== suits[i]) isFlush = false
    }
  
    if (isFlush) return 'Flush'
  
    const cards = new Map<number, number>();
    for (let i = 0; i<5; i++) {
      cards.set(ranks[i], (cards.get(ranks[i]) ?? 0) + 1)
    }
  
    const max = Math.max(...cards.values())
    return max > 2 ? "Three of a Kind" : max == 2 ? "Pair" : "High Card"
  };