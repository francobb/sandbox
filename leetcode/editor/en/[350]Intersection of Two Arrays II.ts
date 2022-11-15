//Given two integer arrays nums1 and nums2, return an array of their 
//intersection. Each element in the result must appear as many times as it shows in both 
//arrays and you may return the result in any order. 
//
// 
// Example 1: 
//
// 
//Input: nums1 = [1,2,2,1], nums2 = [2,2]
//Output: [2,2]
// 
//
// Example 2: 
//
// 
//Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//Output: [4,9]
//Explanation: [9,4] is also accepted.
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
// 
// Follow up: 
//
// 
// What if the given array is already sorted? How would you optimize your 
//algorithm? 
// What if nums1's size is small compared to nums2's size? Which algorithm is 
//better? 
// What if elements of nums2 are stored on disk, and the memory is limited such 
//that you cannot load all elements into the memory at once? 
// 
//
// Related Topics Array Hash Table Two Pointers Binary Search Sorting 👍 5622 👎
// 793


//leetcode submit region begin(Prohibit modification and deletion)
function intersect(nums1: number[], nums2: number[]): number[] {
  // which num is bigger?
  let finalArray = [];
  if (nums1.length < nums2.length){
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  for (let i =0; i < nums1.length; i++) {
    let cn = nums1[i]
    if(nums2.includes(cn)) {
      finalArray.push(cn)
      nums2.splice(nums2.indexOf(cn), 1)
    }
  }

  return finalArray
};
//leetcode submit region end(Prohibit modification and deletion)
