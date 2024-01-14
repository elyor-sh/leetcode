
// https://leetcode.com/problems/determine-if-two-strings-are-close/description/

export function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) {
        return false;
    }

    const freq1: number[] = new Array(26).fill(0);
    const freq2: number[] = new Array(26).fill(0);
    const present1: Set<string> = new Set();
    const present2: Set<string> = new Set();

    for (let i = 0; i < word1.length; i++){
        const char1 = word1[i]
        const char2 = word2[i]

        const index1: number = char1.charCodeAt(0) - 'a'.charCodeAt(0);
        freq1[index1]++;
        present1.add(char1);

        const index2: number = char2.charCodeAt(0) - 'a'.charCodeAt(0);
        freq2[index2]++;
        present2.add(char2);
    }

    if (present1.size !== present2.size || !Array.from(present1).every(char => present2.has(char))) {
        return false;
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    return freq1.every((val, index) => val === freq2[index]);
}