//Given a string s, find the length of the longest substring without repeating c
//haracters.
//
//
// Example 1:
//
//
//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.
//
//
// Example 2:
//
//
//Input: s = "bbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1.
//
//
// Example 3:
//
//
//Input: s = "pwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.
//Notice that the answer must be a substring, "pwke" is a subsequence and not a
//substring.
//
//
// Example 4:
//
//
//Input: s = ""
//Output: 0
//
//
//
// Constraints:
//
//
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
//
// Related Topics Hash Table String Sliding Window
// 👍 15651 👎 778
//leetcode submit region begin(Prohibit modification and deletion)
function lengthOfLongestSubstring(s) {
    var left = 0;
    var longestSubString = 0;
    var seenChars = {};
    for (var right = 0; right < s.length; right++) {
        var prevChar = seenChars[s[right]];
        if (seenChars[s[right]] >= left) {
            left = prevChar + 1;
        }
        seenChars[s[right]] = right;
        longestSubString = Math.max(longestSubString, right - left + 1);
    }
    return longestSubString;
}
//leetcode submit region end(Prohibit modification and deletion)
lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("dvdf");
lengthOfLongestSubstring("abba");
