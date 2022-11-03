//Given an integer array nums and an integer k, return true if there are two 
//distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <
//= k. 
//
// 
// Example 1: 
//
// 
//Input: nums = [1,2,3,1], k = 3
//Output: true
// 
//
// Example 2: 
//
// 
//Input: nums = [1,0,1,1], k = 1
//Output: true
// 
//
// Example 3: 
//
// 
//Input: nums = [1,2,3,1,2,3], k = 2
//Output: false
// 
//
// 
// Constraints: 
//
// 
// 1 <= nums.length <= 10⁵ 
// -10⁹ <= nums[i] <= 10⁹ 
// 0 <= k <= 10⁵ 
// 
//
// Related Topics Array Hash Table Sliding Window 👍 3298 👎 2181


//leetcode submit region begin(Prohibit modification and deletion)
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let cn = nums[i];
    if (typeof map[cn] === 'number') {
      if (i - map[cn] <= k) return true;
    }

    map[nums[i]] = i;
  }

  return false;
};
//leetcode submit region end(Prohibit modification and deletion)
