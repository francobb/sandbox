//Given a signed 32-bit integer x, return x with its digits reversed. If 
//reversing x causes the value to go outside the signed 32-bit integer range [-2³¹, 2³¹ -
// 1], then return 0. 
//
// Assume the environment does not allow you to store 64-bit integers (signed 
//or unsigned). 
//
// 
// Example 1: 
//
// 
//Input: x = 123
//Output: 321
// 
//
// Example 2: 
//
// 
//Input: x = -123
//Output: -321
// 
//
// Example 3: 
//
// 
//Input: x = 120
//Output: 21
// 
//
// 
// Constraints: 
//
// 
// -2³¹ <= x <= 2³¹ - 1 
// 
//
// Related Topics Math 👍 9150 👎 11188


//leetcode submit region begin(Prohibit modification and deletion)
function reverse(x: number): number {
  let rev=0;

  while(x !== 0){
    rev = rev*10 + x % 10;
    x = ~~(x/10);
  }

  return  rev > (Math.pow(2, 31) - 1) || rev < (Math.pow(2, 31) * -1)
      ? 0
      : rev;
};
//leetcode submit region end(Prohibit modification and deletion)
