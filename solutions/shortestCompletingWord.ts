
// https://leetcode.com/problems/shortest-completing-word/description/

const getLetterCounts = (str: string) =>
    str.toLowerCase().split('').reduce((counts, c) => {
        if (c >= 'a' && c <= 'z') {
            counts[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return counts;
    }, new Array(26).fill(0));



export function shortestCompletingWord(licensePlate: string, words: string[]): string {
    const licenseCounts = getLetterCounts(licensePlate);

    return words.reduce((shortestWord, word) => {
        const wordCounts = getLetterCounts(word);

        const isCompletingWord = licenseCounts.every((count, i) => count <= wordCounts[i]);
        const isShorterWord = shortestWord === '' || word.length < shortestWord.length;

        return isCompletingWord && isShorterWord ? word : shortestWord;
    }, '');
}
