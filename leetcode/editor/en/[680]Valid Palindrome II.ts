//Given a string s, return true if the s can be palindrome after deleting at mos
//t one character from it.
//
//
// Example 1:
//
//
//Input: s = "aba"
//Output: true
//
//
// Example 2:
//
//
//Input: s = "abca"
//Output: true
//Explanation: You could delete the character 'c'.
//
//
// Example 3:
//
//
//Input: s = "abc"
//Output: false
//
//
//
// Constraints:
//
//
// 1 <= s.length <= 105
// s consists of lowercase English letters.
//
// Related Topics Two Pointers String Greedy
// 👍 2939 👎 186

//leetcode submit region begin(Prohibit modification and deletion)
function validPalindrome(s: string): boolean {
  let start = 0;
  let end = s.length - 1;

  let recursive = ( s: string, left: number, right: number) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return (
            recursive(s, left + 1, right) ||
            recursive(s, left, end - 1)
        );
      }
    }

    return true;
  }
  recursive(s, start, end);

  // while (start < end) {
  //   if (s[start] !== s[end]) {
  //     return (
  //       validSubPalindrome(s, start + 1, end) ||
  //       validSubPalindrome(s, start, end - 1)
  //     );
  //   }
  //   start++;
  //   end--;
  // }
  return true;
}

const validSubPalindrome = (
  s: string,
  left: number,
  right: number
): boolean => {
  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};

//leetcode submit region end(Prohibit modification and deletion)
