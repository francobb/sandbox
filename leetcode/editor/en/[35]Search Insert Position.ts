//Given a sorted array of distinct integers and a target value, return the 
//index if the target is found. If not, return the index where it would be if it were 
//inserted in order. 
//
// You must write an algorithm with O(log n) runtime complexity. 
//
// 
// Example 1: 
//
// 
//Input: nums = [1,3,5,6], target = 5
//Output: 2
// 
//
// Example 2: 
//
// 
//Input: nums = [1,3,5,6], target = 2
//Output: 1
// 
//
// Example 3: 
//
// 
//Input: nums = [1,3,5,6], target = 7
//Output: 4
// 
//
// 
// Constraints: 
//
// 
// 1 <= nums.length <= 10⁴ 
// -10⁴ <= nums[i] <= 10⁴ 
// nums contains distinct values sorted in ascending order. 
// -10⁴ <= target <= 10⁴ 
// 
//
// Related Topics Array Binary Search 👍 9977 👎 476


//leetcode submit region begin(Prohibit modification and deletion)
function searchInsert(nums: number[], target: number): number {
  let idx = 0;
  let jdx = nums.length -1;

  // perform binary search to find location
  while(idx < jdx) {
    // find mid
    let mid = (idx +jdx) / 2;
    let midNum = nums[mid];

    if ( midNum == target ) {
      return mid;
    }

    if (midNum > target) {
      jdx = mid - 1;
    }

    if (midNum < target) {
      idx = mid + 1;
    }

  }

  if (idx > jdx) {
    return idx;
  } else {
    return jdx;
  }

};
//leetcode submit region end(Prohibit modification and deletion)
