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
function quickSort(array, left, right) {
    if (left < right) {
        var partitionIndex = partition(array, left, right);
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
}
function findKthLargest1(nums, k) {
    var indexToFind = nums.length - k;
    quickSort(nums, 0, nums.length - 1);
    return nums[indexToFind];
}
