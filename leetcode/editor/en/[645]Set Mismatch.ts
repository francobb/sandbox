//You have a set of integers s, which originally contains all the numbers from 1
// to n. Unfortunately, due to some error, one of the numbers in s got duplicated 
//to another number in the set, which results in repetition of one number and 
//loss of another number. 
//
// You are given an integer array nums representing the data status of this set 
//after the error. 
//
// Find the number that occurs twice and the number that is missing and return 
//them in the form of an array. 
//
// 
// Example 1: 
// Input: nums = [1,2,2,4]
//Output: [2,3]
// 
// Example 2: 
// Input: nums = [1,1]
//Output: [1,2]
// 
// 
// Constraints: 
//
// 
// 2 <= nums.length <= 10⁴ 
// 1 <= nums[i] <= 10⁴ 
// 
//
// Related Topics Array Hash Table Bit Manipulation Sorting 👍 3277 👎 764


//leetcode submit region begin(Prohibit modification and deletion)
function findErrorNums(nums: number[]): number[] {
  let set = new Array(nums.length)
  let dup = 0

  // find dupe; add nums to SET
  for(let i = 0; i < nums.length; i++) {
    if (set[nums[i] - 1]) dup = nums[i]
    set[nums[i] - 1] = true
  }

  // find missing number in SET
  for(let i = 1; i < nums.length; i++) {
    if(!set[i-1]) return [dup, i]
  }

  return [dup, nums.length]
};
//leetcode submit region end(Prohibit modification and deletion)
