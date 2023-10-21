
// https://leetcode.com/problems/total-distance-traveled/

export function distanceTraveled(mainTank: number, additionalTank: number): number {
    let distance : number = 0;

    do {
        distance+= 10;
        mainTank--;
        if (distance % 50 === 0 && additionalTank > 0) {
            additionalTank--;
            mainTank++;
        }
    } while(mainTank > 0);

    return distance;
}