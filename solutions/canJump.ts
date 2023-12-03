
// https://leetcode.com/problems/jump-game/description/

export function canJump(nums: number[]): boolean {
  let jumps = nums[0];

  for ( let i = 1; i < nums.length; i++) {
      if ( jumps === 0 )  {
          return false;
      }

  jumps = jumps - 1;
  jumps = jumps > nums[i]? jumps : nums[i];

  }

  return true
};

// export function canJump(nums: number[]): boolean {
//   let idx = 0

//   while (idx < nums.length){
//       if(idx >= nums.length - 1){
//         return true
//       }

//       const cur = nums[idx]

//       if(cur !== 0){
//         idx += cur
//       }else {

//         let isFound = false
       
//         for (let i = idx - 1; i >= 0; i--){
//           const current = nums[i]
//           if(current > idx - i){
//             isFound = true
//             idx = i
//             break
//           }
//         }

//         if(!isFound){
//           return false
//         }

//       }
//   }

//   return true
// }