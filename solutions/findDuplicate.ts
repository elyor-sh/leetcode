
// https://leetcode.com/problems/find-duplicate-file-in-system/description/

export function findDuplicate(paths: string[]): string[][] {
    const hash: Record<string, string[]> = {}

    for (const path of paths){
        const splitted = path.split(' ')

        for (let i = 1; i < splitted.length; i++){
            const s = splitted[i]
            const contents = s.split('(')
            const content = contents[contents.length - 1]

            if(!hash[content]){
                hash[content] = []
            }

            hash[content].push(splitted[0] + '/' + contents[0])
        }
    }

    const result = Object.values(hash)
    return result.filter(path => path.length > 1)
}