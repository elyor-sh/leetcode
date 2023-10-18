export function sumOddLengthSubarrays(arr: number[]): number {

  let result = 0

  for (let i = 0; i < arr.length; i++){
    result+= arr[i]

    for(let j = i + 2; j < arr.length; j += 2) {
      const sub = arr.slice(i, j + 1)
      result += sub.reduce((acc, item) => acc += item, 0)
    }
  }

  return result
};