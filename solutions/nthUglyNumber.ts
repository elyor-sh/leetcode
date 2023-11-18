
// https://leetcode.com/problems/ugly-number-ii/description/

export function nthUglyNumber(n: number): number {
    const list: number[] = [1];

    let del2: number = 0;
    let del3: number = 0;
    let del5: number = 0;

    while (list.length < n) {
        const val2 = list[del2] * 2;
        const val3 = list[del3] * 3;
        const val5 = list[del5] * 5;
        const minNext = Math.min(val2, val3, val5);

        if (minNext === val2) del2++;
        if (minNext === val3) del3++;
        if (minNext === val5) del5++;

        list.push(minNext);
    }

    return list[n - 1];
}