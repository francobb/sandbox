/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {

    // use the sliding window technique
    let p1 = 0;
    for (let idx = 0; idx < nums.length; idx++) {

        if (nums[p1] != nums[idx]) {
            nums[++p1] = nums[idx];
        }
    }

    return ++p1;
};
removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// @lc code=end

