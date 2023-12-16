
// https://leetcode.com/problems/valid-triangle-number/description/

export function triangleNumber(nums: number[]): number {
  let count = 0

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++){
    let k = i + 2
    for (let j = i + 1; j < nums.length - 1 && nums[i] != 0; j++){
      while (k < nums.length && nums[i] + nums[j] > nums[k]){
        k++;
        count += k - j - 1;
      }
    }
  }

  return count
}

// function triangleNumber(nums: number[]): number {
//   if (nums.length < 3) {
//     return 0;
//   }

//   nums.sort((a, b) => a - b);

//   let count = 0;

//   for (let i = nums.length -1; i > 1; --i) {
//     let left = 0;
//     let right = i - 1;

//     while (left < right) {
//       const canFormTriangle = nums[left] + nums[right] > nums[i];

//       if (canFormTriangle) {
//         count += right - left;
//         --right;
//       } else {
//         ++left;
//       }
//     }
//   }

//   return count;
// }