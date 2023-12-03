
// https://leetcode.com/problems/reverse-words-in-a-string/description/

export function reverseWords(s: string): string {

  const splitted = s.split(' ')

  let reversed = ''

  for (const word of splitted){
    reversed = word === '' ? reversed : (reversed ? word + ' ' + reversed : word)
  }
  
  return reversed

}

// 2
// function reverseWords(s: string): string {
//   return s.split(' ').filter(word => word !== '').reverse().join(' ')
// }