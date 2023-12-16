
// https://leetcode.com/problems/search-suggestions-system/

export function suggestedProducts(products: string[], searchWord: string): string[][] {
    let matches = products.sort();

    const result: string[][] = [];

    let word = '';

    for (let i = 0; i < searchWord.length; i++) {
        word += searchWord[i];
        matches = matches.filter((w) => w.startsWith(word));

        result.push(matches.slice(0, 3));
    }

    return result;
}

// export function suggestedProducts(products: string[], searchWord: string): string[][] {
//     const result: string[][] = []
//
//     let word = ''
//
//     for (let i = 0; i < searchWord.length; i++){
//         word += searchWord[i]
//
//         const local: string[] =[]
//
//         products.forEach(product => {
//             if(word === product.slice(0, word.length)){
//                 local.push(product)
//             }
//         })
//
//         local.sort()
//
//         result.push(local.slice(0, 3))
//
//     }
//
//     return result;
// }