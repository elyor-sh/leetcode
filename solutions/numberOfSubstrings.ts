
// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/

export function numberOfSubstrings(s: string): number {
    let result = 0

    let start = 0
    const countMap: Record<string, number> = { a: 0, b: 0, c: 0 };

    for (let end = 0; end < s.length; end++) {
        countMap[s[end]]++;

        while (countMap.a && countMap.b && countMap.c) {
            result += s.length - end;
            countMap[s[start++]]--;
        }
    }

    return result
}