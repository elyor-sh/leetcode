
// https://leetcode.com/problems/perfect-squares/description/

export function numSquares(n: number): number {
  // Теорема Лежандра о трёх квадратах

  const isSquare = (n: number) => Number.isInteger(Math.sqrt(n))

  // n = x^2
  if (isSquare(n)) {
    return 1
  }
  // n = 4^a(8*b + 7)
  while (n % 4 === 0) {
    n /= 4
  }
  if (n % 8 === 7) {
    return 4
  }
  // n = x^2 + y^2
  for (let i = 1; i <= n; i++) {
    if (isSquare(n - i * i)) {
      return 2
    }
  }
  // n=x^2+y^2+z^2
  return 3
}