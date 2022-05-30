//Given an integer array nums and an integer k, return the kᵗʰ largest element 
//in the array. 
//
// Note that it is the kᵗʰ largest element in the sorted order, not the kᵗʰ 
//distinct element. 
//
// 
// Example 1: 
// Input: nums = [3,2,1,5,6,4], k = 2
//Output: 5
// Example 2: 
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
//Output: 4
// 
// 
// Constraints: 
//
// 
// 1 <= k <= nums.length <= 10⁴ 
// -10⁴ <= nums[i] <= 10⁴ 
// 
// Related Topics Array Divide and Conquer Sorting Heap (Priority Queue) 
//Quickselect 👍 6933 👎 405
//leetcode submit region begin(Prohibit modification and deletion)
function findKthLargest(nums, k) {
    function partition(array, left, right) {
        var pivotElement = array[right];
        var partitionIndex = left;
        function swap(array, j, i) {
            var temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
        for (var i = left; i < right; i++) {
            if (array[i] < pivotElement) {
                swap(array, partitionIndex, i);
                partitionIndex++;
            }
        }
        swap(array, partitionIndex, right);
        return partitionIndex;
    }
    // function quickSort(array: number[], left: number, right: number){
    //   if (left < right ){
    //     const partitionIndex = partition(array, left, right);
    //     quickSort(array, left, partitionIndex -1);
    //     quickSort(array, partitionIndex +1, right);
    //   }
    // }
    var quickSelect = function (array, left, right, idxToFind) {
        if (left < right) {
            var partitionIdx = partition(array, left, right);
            if (partitionIdx === idxToFind) {
                return array[partitionIdx];
            }
            else if (idxToFind < partitionIdx) {
                return quickSelect(array, left, partitionIdx - 1, idxToFind);
            }
            else {
                return quickSelect(array, partitionIdx + 1, right, idxToFind);
            }
        }
    };
    var indexToFind = nums.length - k;
    // quickSort(nums, 0, nums.length-1);
    quickSelect(nums, 0, nums.length - 1, indexToFind);
    return nums[indexToFind];
}
;
//leetcode submit region end(Prohibit modification and deletion)
