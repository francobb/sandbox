function containsDuplicate(nums) {
    var hs = new Set();
    for (var i = 0; i < nums.length; i++) {
        if (hs.has(nums[i]))
            return true;
        if (!hs.has(nums[i]))
            hs.add(nums[i]);
    }
    return false;
}
var contains_duplicate = function (nums) {
    if (nums.length === 0)
        return false;
    var numSet = new Set(nums);
    return numSet.size != nums.length;
};
function duplicateContains(nums) {
    nums.sort();
    return nums.some(function (el, idx) { return el === nums[idx + 1]; });
}
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
// console.log(contains_duplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(duplicateContains([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
