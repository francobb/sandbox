//<p>Given an array of integers <code>nums</code> sorted in non-decreasing order, find the starting and ending position of a given <code>target</code> value.</p>
//
//<p>If <code>target</code> is not found in the array, return <code>[-1, -1]</code>.</p>
//
//<p>You must&nbsp;write an algorithm with&nbsp;<code>O(log n)</code> runtime complexity.</p>
//
//<p>&nbsp;</p>
//<p><strong>Example 1:</strong></p>
//<pre><strong>Input:</strong> nums = [5,7,7,8,8,10], target = 8
//<strong>Output:</strong> [3,4]
//</pre><p><strong>Example 2:</strong></p>
//<pre><strong>Input:</strong> nums = [5,7,7,8,8,10], target = 6
//<strong>Output:</strong> [-1,-1]
//</pre><p><strong>Example 3:</strong></p>
//<pre><strong>Input:</strong> nums = [], target = 0
//<strong>Output:</strong> [-1,-1]
//</pre>
//<p>&nbsp;</p>
//<p><strong>Constraints:</strong></p>
//
//<ul>
//	<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
//	<li><code>-10<sup>9</sup>&nbsp;&lt;= nums[i]&nbsp;&lt;= 10<sup>9</sup></code></li>
//	<li><code>nums</code> is a non-decreasing array.</li>
//	<li><code>-10<sup>9</sup>&nbsp;&lt;= target&nbsp;&lt;= 10<sup>9</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>Array</li><li>Binary Search</li></div></div><br><div><li>👍 7888</li><li>👎 250</li></div>
//leetcode submit region begin(Prohibit modification and deletion)
function searchRange(nums, target) {
    function binarySearch(array, left, right, target) {
        while (left <= right) {
            var mid = Math.floor((left + right) / 2);
            var foundVal = nums[mid];
            if (foundVal === target) {
                return mid;
            }
            else if (foundVal < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return -1;
    }
    if (nums.length < 1)
        return [-1, -1];
    var first_position = binarySearch(nums, 0, nums.length - 1, target);
    if (first_position === -1)
        return [-1, -1];
    var start_position = first_position, end_position = first_position, temp_pos_1, temp_pos_2;
    while (start_position !== -1) {
        temp_pos_1 = start_position;
        start_position = binarySearch(nums, 0, start_position - 1, target);
    }
    start_position = temp_pos_1;
    while (end_position !== -1) {
        temp_pos_2 = end_position;
        end_position = binarySearch(nums, end_position + 1, nums.length - 1, target);
    }
    end_position = temp_pos_2;
    return [start_position, end_position];
}
//leetcode submit region end(Prohibit modification and deletion)
