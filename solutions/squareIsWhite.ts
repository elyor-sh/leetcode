
// https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/

export function squareIsWhite(coordinates: string): boolean {

  const isEven = (num: number) => num % 2 === 0

  const letters = {
    a: true,
    b: false,
    c: true,
    d: false,
    e: true,
    f: false,
    g: true,
    h: false
  }

  const [letter, numStr] = coordinates.split('') as [keyof typeof letters, string]

  const even = isEven(Number(numStr))

  return letters[letter] ? even : !even

};