//Given n non-negative integers a1, a2, ..., an , where each represents a point
//at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of
// the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x
//-axis forms a container, such that the container contains the most water.
//
// Notice that you may not slant the container.
//
//
// Example 1:
//
//
//Input: height = [1,8,6,2,5,4,8,3,7]
//Output: 49
//Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,
//3,7]. In this case, the max area of water (blue section) the container can conta
//in is 49.
//
//
// Example 2:
//
//
//Input: height = [1,1]
//Output: 1
//
//
// Example 3:
//
//
//Input: height = [4,3,2,1,4]
//Output: 16
//
//
// Example 4:
//
//
//Input: height = [1,2,1]
//Output: 2
//
//
//
// Constraints:
//
//
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104
//
// Related Topics Array Two Pointers
// 👍 9883 👎 732
//leetcode submit region begin(Prohibit modification and deletion)
function maxArea(height) {
    var maximumArea = 0;
    var p1 = 0;
    var p2 = height.length - 1;
    // find two highest values in array
    while (p1 < p2) {
        // max area is min of two highest times difference of indices
        var xPos = Math.min(height[p1], height[p2]);
        var yPos = p2 - p1;
        var currentArea = xPos * yPos;
        maximumArea = Math.max(maximumArea, currentArea);
        if (height[p1] <= height[p2]) {
            p1++;
        }
        else {
            p2--;
        }
    }
    return maximumArea;
}
//leetcode submit region end(Prohibit modification and deletion)
