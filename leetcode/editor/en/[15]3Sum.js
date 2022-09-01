//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[
//k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//
// Notice that the solution set must not contain duplicate triplets.
//
//
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
//Output: [[-1,-1,2],[-1,0,1]]
// Example 2:
// Input: nums = []
//Output: []
// Example 3:
// Input: nums = [0]
//Output: []
//
//
// Constraints:
//
//
// 0 <= nums.length <= 3000
// -10⁵ <= nums[i] <= 10⁵
//
// Related Topics Array Two Pointers Sorting 👍 17833 👎 1712
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
//leetcode submit region begin(Prohibit modification and deletion)
function threeSum(nums) {
    if (nums.length < 3)
        return [];
    nums.sort(function (a, b) { return a - b; });
    var finalArr = [];
    for (var i = 0; i < nums.length; i++) {
        var _a = __read([i + 1, nums.length - 1], 2), leftP = _a[0], rightP = _a[1];
        var t = 0 - nums[i];
        if (i > 0 && nums[i] == nums[i - 1])
            continue;
        while (leftP < rightP) {
            var sum = nums[leftP] + nums[rightP];
            if (sum === t) {
                finalArr.push([nums[i], nums[leftP], nums[rightP]]);
                while (nums[leftP] === nums[leftP + 1])
                    leftP++;
                while (nums[rightP] === nums[rightP - 1])
                    rightP--;
                leftP++;
                rightP--;
            }
            else if (sum < t) {
                leftP++;
            }
            else {
                rightP--;
            }
        }
    }
    console.log({ finalArr: finalArr });
    return finalArr;
}
;
threeSum([-1, 0, 1, 2, -1, -4]);
//leetcode submit region end(Prohibit modification and deletion)
