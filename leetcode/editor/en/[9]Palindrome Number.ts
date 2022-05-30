//Given an integer x, return true if x is palindrome integer. 
//
// An integer is a palindrome when it reads the same backward as forward. 
//
// 
// For example, 121 is a palindrome while 123 is not. 
// 
//
// 
// Example 1: 
//
// 
//Input: x = 121
//Output: true
//Explanation: 121 reads as 121 from left to right and from right to left.
// 
//
// Example 2: 
//
// 
//Input: x = -121
//Output: false
//Explanation: From left to right, it reads -121. From right to left, it 
//becomes 121-. Therefore it is not a palindrome.
// 
//
// Example 3: 
//
// 
//Input: x = 10
//Output: false
//Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// 
//
// 
// Constraints: 
//
// 
// -2³¹ <= x <= 2³¹ - 1 
// 
//
// 
//Follow up: Could you solve it without converting the integer to a string? 
//Related Topics Math 👍 5832 👎 2136


//leetcode submit region begin(Prohibit modification and deletion)
function isPalindrome(x: number): boolean {
  let xS1 = "" + x;
  let arr = [...xS1.split("")];
  let xS2 = Array.from(String(x));
  let xN2 = Array.from(String(x), Number);


  // let numArr = [...x];
  // if (x < 2) return false;
  let [lp, rp] = [0, arr.length - 1];
  while (lp <= rp) {
    if (arr[lp] != arr[rp]) return false;
    lp++;
    rp--;
  }

  return true;};
//leetcode submit region end(Prohibit modification and deletion)
