export function totalMoney(n: number): number {

  // arifmetik progressiya Sn = n * (a1 + an) / 2
  // an = a1 + d(n - 1)

  const firstWeek = 28
  const wholeWeeks = Math.floor(n / 7)
  const days = n % 7

  const lastWeekMoney = firstWeek + 7 * (wholeWeeks - 1)
  const lastMondayMoney = 1 + 1 * wholeWeeks
  const lastMoney = days * (lastMondayMoney + lastMondayMoney + days - 1) / 2
  

  return wholeWeeks * (firstWeek + lastWeekMoney) / 2 + lastMoney

};