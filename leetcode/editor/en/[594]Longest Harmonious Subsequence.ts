//We define a harmonious array as an array where the difference between its
//maximum value and its minimum value is exactly 1.
//
// Given an integer array nums, return the length of its longest harmonious
//subsequence among all its possible subsequences.
//
//
// Example 1:
//
//
// Input: nums = [1,3,2,2,5,2,3,7]
//
//
// Output: 5
//
// Explanation:
//
// The longest harmonious subsequence is [3,2,2,2,3].
//
// Example 2:
//
//
// Input: nums = [1,2,3,4]
//
//
// Output: 2
//
// Explanation:
//
// The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of
//which have a length of 2.
//
// Example 3:
//
//
// Input: nums = [1,1,1,1]
//
//
// Output: 0
//
// Explanation:
//
// No harmonic subsequence exists.
//
//
// Constraints:
//
//
// 1 <= nums.length <= 2 * 10⁴
// -10⁹ <= nums[i] <= 10⁹
//
//
// Related Topics Array Hash Table Sliding Window Sorting Counting 👍 2783 👎 34
//2


//leetcode submit region begin(Prohibit modification and deletion)
function findLHS(nums: number[]): number {
  const freqMap = new Map<number, number>();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  let maxLength = 0;
  for (const [num, count] of freqMap.entries()) {
    if (freqMap.has(num + 1)) {
      maxLength = Math.max(maxLength, count + freqMap.get(num + 1)!);
    }
  }
  return maxLength;
};
//leetcode submit region end(Prohibit modification and deletion)
