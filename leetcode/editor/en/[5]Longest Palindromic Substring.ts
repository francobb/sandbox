//Given a string s, return the longest palindromic substring in s. 
//
// 
// Example 1: 
//
// 
//Input: s = "babad"
//Output: "bab"
//Explanation: "aba" is also a valid answer.
// 
//
// Example 2: 
//
// 
//Input: s = "cbbd"
//Output: "bb"
// 
//
// 
// Constraints: 
//
// 
// 1 <= s.length <= 1000 
// s consist of only digits and English letters. 
// 
// Related Topics String Dynamic Programming 👍 17739 👎 1052

function expandFromCenter(str: string, left: number, right: number) {
  if (str == null || left > right ) return 0

  while(left >= 0 && right < str.length && str.charAt(left) == str.charAt(right)) {
    left--;
    right++;
  }

  return right - left - 1;
}
//leetcode submit region begin(Prohibit modification and deletion)
function longestPalindrome(s: string): string {
  if(s==null|| s.length<1 ) return "";
  let [start, end] = [0, 0]

  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromCenter(s, i, i);
    let len2 = expandFromCenter(s, i, i+1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - ((len-1)/2);
      end = i + (len/2)
    }
  }

  console.log("LOOK HERE ===:::::::=== "+ s.substring(start, end+1));
  return s.substring(start, end+1)
};

longestPalindrome("babad");
//leetcode submit region end(Prohibit modification and deletion)
