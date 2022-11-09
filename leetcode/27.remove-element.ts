/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let p1 = 0;
    for (let idx = 0; idx < nums.length; idx++) {
       
        while(nums[idx] === val){
            idx++
        }

       nums[p1++] = nums[idx];
    }

    return p1;

};
removeElement([0,1,2,2,3,0,4,2], 2)
// @lc code=end

