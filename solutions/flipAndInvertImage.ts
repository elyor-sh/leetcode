
// https://leetcode.com/problems/flipping-an-image/description/

export function flipAndInvertImage(image: number[][]): number[][] {

    for (let i = 0; i < image.length; i++){
        image[i].reverse()

        for (let j = 0; j < image[i].length; j++){
            const cur = image[i][j]
            image[i][j] = cur === 1 ? 0 : 1
        }
    }


    return image
}
