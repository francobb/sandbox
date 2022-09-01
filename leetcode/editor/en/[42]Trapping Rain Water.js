//Given n non-negative integers representing an elevation map where the width of
// each bar is 1, compute how much water it can trap after raining.
//
//
// Example 1:
//
//
//Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
//Output: 6
//Explanation: The above elevation map (black section) is represented by array [
//0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are
// being trapped.
//
//
// Example 2:
//
//
//Input: height = [4,2,0,3,2,5]
//Output: 9fo
//
//
//
// Constraints:
//
//
// n == height.length
// 0 <= n <= 3 * 104
// 0 <= height[i] <= 105
//
// Related Topics Array Two Pointers Dynamic Programming Stack
// 👍 11781 👎 171
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
function trap(height) {
    var leftP = 0;
    var rightP = height.length - 1;
    var maxLeft = 0;
    var maxRight = 0;
    var totalH20 = 0;
    while (leftP < rightP) {
        var _a = __read([height[leftP], height[rightP]], 2), l = _a[0], r = _a[1];
        // which side has a wall already ?
        if (l <= r) { // right has a bigger or equal sized wall
            if (maxLeft < l) {
                // calculate new wall
                maxLeft = l;
            }
            else {
                // use wall to calculate current level
                totalH20 += maxLeft - l;
            }
            leftP++;
        }
        else {
            if (maxRight < r) {
                maxRight = r;
            }
            else {
                totalH20 += maxRight - r;
            }
            rightP--;
        }
    }
    return totalH20;
}
//leetcode submit region end(Prohibit modification and deletion)
