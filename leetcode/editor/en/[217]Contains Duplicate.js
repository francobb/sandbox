//Given an integer array nums, return true if any value appears at least twice 
//in the array, and return false if every element is distinct. 
//
// 
// Example 1: 
// Input: nums = [1,2,3,1]
//Output: true
// 
// Example 2: 
// Input: nums = [1,2,3,4]
//Output: false
// 
// Example 3: 
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
//Output: true
// 
// 
// Constraints: 
//
// 
// 1 <= nums.length <= 10⁵ 
// -10⁹ <= nums[i] <= 10⁹ 
// 
//
// Related Topics Array Hash Table Sorting 👍 6308 👎 1015
//leetcode submit region begin(Prohibit modification and deletion)
function containsDuplicate(nums) {
    if (nums.length === 0)
        return false;
    var numSet = new Set(nums);
    return numSet.size != nums.length;
}
;
//leetcode submit region end(Prohibit modification and deletion)
