//Given an array of integers nums and an integer target, return indices of the t
//wo numbers such that they add up to target. 
//
// You may assume that each input.sh would have exactly one solution, and you may n
//ot use the same element twice. 
//
// You can return the answer in any order. 
//
// 
// Example 1: 
//
// 
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// 
//
// Example 2: 
//
// 
//Input: nums = [3,2,4], target = 6
//Output: [1,2]
// 
//
// Example 3: 
//
// 
//Input: nums = [3,3], target = 6
//Output: [0,1]
// 
//
// 
// Constraints: 
//
// 
// 2 <= nums.length <= 104 
// -109 <= nums[i] <= 109 
// -109 <= target <= 109 
// Only one valid answer exists. 
// 
//
// 
//Follow-up: Can you come up with an algorithm that is less than O(n2) time comp
//lexity? Related Topics Array Hash Table 
// 👍 21580 👎 739

//leetcode submit region begin(Prohibit modification and deletion)
function twoSum(nums: number[], target: number): number[] {
    let map = new Map();

    for (let index = 0; index < nums.length; index++) {
        let diff = target - nums[index];

        if (map.has(diff)){
            return [map.get(diff), index];
        } else {
            map.set(nums[index], index);
        }
    }
}
//leetcode submit region end(Prohibit modification and deletion)
