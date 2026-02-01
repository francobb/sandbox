//Given two integer arrays nums1 and nums2, return an array of their 
//intersection. Each element in the result must be unique and you may return the result in 
//any order. 
//
// 
// Example 1: 
//
// 
//Input: nums1 = [1,2,2,1], nums2 = [2,2]
//Output: [2]
// 
//
// Example 2: 
//
// 
//Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//Output: [9,4]
//Explanation: [4,9] is also accepted.
// 
//
// 
// Constraints: 
//
// 
// 1 <= nums1.length, nums2.length <= 1000 
// 0 <= nums1[i], nums2[i] <= 1000 
// 
//
// Related Topics Array Hash Table Two Pointers Binary Search Sorting 👍 3991 👎
// 2039


//leetcode submit region begin(Prohibit modification and deletion)
function intersection(nums1: number[], nums2: number[]): number[] {
  let counter = 0;
  let final = [];

  while (counter < nums1.length) {
    if (nums2.includes(nums1[counter]) && !final.includes(nums1[counter])){
      final.push(nums1[counter]);
      nums2.splice(nums2.indexOf(nums1[counter]), 1);
    }

    counter++;
  }

  return final;
};
//leetcode submit region end(Prohibit modification and deletion)
