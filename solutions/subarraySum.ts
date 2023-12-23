
// https://leetcode.com/problems/subarray-sum-equals-k/description/

export function subarraySum(nums: number[], k: number): number {
    let map = new Map<number, number>([[0,1]]);
    let current: number = 0;
    let matches: number = 0;

    for(let i = 0; i < nums.length; i++){
        current += nums[i];
        matches += map.get(current - k) ?? 0;

        map.set(current, (map.get(current) ?? 0) + 1)
    }

    return matches;
}

// function subarraySum(nums: number[], k: number): number {
//     let result = 0
//
//     for (let i = 0; i < nums.length; i++){
//         if(nums[i] === k){
//             result++
//             continue
//         }
//
//         let sum = nums[i]
//         let start = i + 1
//         while (start < nums.length){
//             sum += nums[start]
//
//             if(sum === k){
//                 result++
//             }
//
//             start++
//         }
//     }
//
//     return result
// }