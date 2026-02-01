//Write a function that reverses a string. The input.sh string is given as an
//array of characters s. 
//
// 
// Example 1: 
// Input: s = ["h","e","l","l","o"]
//Output: ["o","l","l","e","h"]
// Example 2: 
// Input: s = ["H","a","n","n","a","h"]
//Output: ["h","a","n","n","a","H"]
// 
// 
// Constraints: 
//
// 
// 1 <= s.length <= 10⁵ 
// s[i] is a printable ascii character. 
// 
//
// 
// Follow up: Do not allocate extra space for another array. You must do this 
//by modifying the input.sh array in-place with O(1) extra memory.
// Related Topics Two Pointers String Recursion 👍 2870 👎 824


//leetcode submit region begin(Prohibit modification and deletion)
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let leftPointer = 0, rightPointer = s.length -1;

  while (leftPointer < rightPointer) {
    let tempSpace = s[leftPointer];
    s[leftPointer] = s[rightPointer]
    s[rightPointer]= tempSpace;

    rightPointer--;
    leftPointer++
  }
};
//leetcode submit region end(Prohibit modification and deletion)
