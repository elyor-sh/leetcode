


export function findSubstring(s: string, words: string[]): number[] {
  if (!words?.length || !s?.length || words.some(word => !s.includes(word))) {
      return [];
  }

  const indexes = [];
  const { length } = words.join('');
  const maxIndex = s.length - length;
  const matchCache: Record<string, string[]> = {};
  
  for (let i = 0; i <= maxIndex; i++) {
      const word = s.slice(i, i + length);
      matchCache[word] = matchCache[word] ?? isMatched(word, words);

      if (matchCache[word]) {
          indexes.push(i);
      }
  }

  return indexes;
};

function isMatched(word: string, subwords: string[]): boolean {
  const [{ length }] = subwords;
  const words = subwords.map((_, index) => word.slice(index * length, index * length + length));

  return subwords.every(subword => {
      const index = words.indexOf(subword);

      if (index === -1) {
          return false;
      }

      words.splice(index, 1);

      return true;
  });
}