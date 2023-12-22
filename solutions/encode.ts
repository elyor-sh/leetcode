
// https://leetcode.com/problems/encode-and-decode-tinyurl/description/

const map = new Map<string, string>()

export function encode(longUrl: string): string {
	const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);

  const tiny = 'http://tinyurl.com/' + uniqueId

  map.set(tiny, longUrl)

  return tiny
};


export function decode(shortUrl: string): string {
	return map.get(shortUrl)!
};