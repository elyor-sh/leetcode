
// https://leetcode.com/problems/count-days-spent-together/description/


export function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {

  const NOT_LEAP_YEAR = "2023-"
  const DAY = 1000 * 60 * 60 * 24

  const getDateVal = (a: string): number => {
    return new Date(NOT_LEAP_YEAR + a).valueOf()
}

return Math.max(
    0,
    (
        Math.min(getDateVal(leaveAlice), getDateVal(leaveBob))
        - Math.max(getDateVal(arriveAlice), getDateVal(arriveBob))
    )/ DAY + 1
)
};