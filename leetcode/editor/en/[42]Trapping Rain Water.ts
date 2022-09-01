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

//leetcode submit region begin(Prohibit modification and deletion)
function trap(height: number[]): number {
  let leftP = 0;
  let rightP = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let totalH20 = 0;

  while (leftP < rightP) {
    let [l, r] = [height[leftP], height[rightP]]
    // which side has a wall already ?
    if (l <= r) { // right has a bigger or equal sized wall
      if (maxLeft < l) {
        // calculate new wall
        maxLeft = l;
      } else {
        // use wall to calculate current level
        totalH20 += maxLeft - l;
      }
      leftP++;
    }
    else {
      if (maxRight < r){
        maxRight = r;
      } else {
        totalH20 += maxRight - r;
      }
      rightP--;
    }
  }

  return totalH20;
}
//leetcode submit region end(Prohibit modification and deletion)
