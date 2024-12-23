//Given two sorted arrays nums1 and nums2 of size m and n respectively, return t
//he median of the two sorted arrays. 
//
// The overall run time complexity should be O(log (m+n)). 
//
// 
// Example 1: 
//
// 
//Input: nums1 = [1,3], nums2 = [2]
//Output: 2.00000
//Explanation: merged array = [1,2,3] and median is 2.
// 
//
// Example 2: 
//
// 
//Input: nums1 = [1,2], nums2 = [3,4]
//Output: 2.50000
//Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// 
//
// Example 3: 
//
// 
//Input: nums1 = [0,0], nums2 = [0,0]
//Output: 0.00000
// 
//
// Example 4: 
//
// 
//Input: nums1 = [], nums2 = [1]
//Output: 1.00000
// 
//
// Example 5: 
//
// 
//Input: nums1 = [2], nums2 = []
//Output: 2.00000
// 
//
// 
// Constraints: 
//
// 
// nums1.length == m 
// nums2.length == n 
// 0 <= m <= 1000 
// 0 <= n <= 1000 
// 1 <= m + n <= 2000 
// -106 <= nums1[i], nums2[i] <= 106 
// 
// Related Topics Array Binary Search Divide and Conquer 
// 👍 10482 👎 1566


//leetcode submit region begin(Prohibit modification and deletion)
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const l1 = nums1.length, l2 = nums2.length;
    const isEven = (l1 + l2) % 2 === 0;
    const arr: number[] = []
    let counter = 0; // counter
    let i = 0, j = 0;

    while(i < l1 || j < l2) {
        if (j === l2 || nums1[i] < nums2[j]) {
            arr[counter++] = nums1[i];
            i++
        } else {
            arr[counter++] = nums2[j];
            j++;
        }

        if (counter > (l1 + l2) / 2) {
            if (isEven) {
                return (arr[arr.length -2] + arr[arr.length - 1])/2.0;
            } else {
                return arr[arr.length -1]
            }
        }
    }

    return 0;
};

findMedianSortedArrays([1,2], [3,4])
//leetcode submit region end(Prohibit modification and deletion)


