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


//leetcode submit region begin(Prohibit modification and deletion)
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return []
  nums.sort((a, b) => a - b);
  let finalArr = [];
  for (let i = 0; i < nums.length; i++) {
    let [leftP, rightP] = [i+1, nums.length-1]
    let t = 0 - nums[i];
    if (i > 0 && nums[i] == nums[i-1]) continue;

    while(leftP < rightP) {
      let sum = nums[leftP] + nums[rightP];
      if (sum === t){
        finalArr.push([nums[i], nums[leftP], nums[rightP]])
        while(nums[leftP] === nums[leftP+1]) leftP++;
        while(nums[rightP] === nums[rightP-1]) rightP--;
        leftP++;
        rightP--;
      } else if ( sum < t) {
        leftP++;
      } else {
        rightP--;
      }
    }

  }
  console.log({finalArr});
  return finalArr;
};
threeSum([-1,0,1,2,-1,-4])
//leetcode submit region end(Prohibit modification and deletion)
