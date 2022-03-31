//Given a string s, determine if it is a palindrome, considering only alphanumer
//ic characters and ignoring cases.
//
//
// Example 1:
//
//
//Input: s = "A man, a plan, a canal: Panama"
//Output: true
//Explanation: "amanaplanacanalpanama" is a palindrome.
//
//
// Example 2:
//
//
//Input: s = "race a car"
//Output: false
//Explanation: "raceacar" is not a palindrome.
//
//
//
// Constraints:
//
//
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
//
// Related Topics Two Pointers String
// 👍 2267 👎 4116
//leetcode submit region begin(Prohibit modification and deletion)
function isPalindrome(s) {
    if (s.length <= 0) {
        return false;
    }
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    var right = s.length - 1;
    var left = 0;
    while (left <= right) {
        if (s[left] !== s[right]) {
            return false;
        }
        right--;
        left++;
    }
    return true;
}
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("A man, a plan, ab canal: Panama"));
//leetcode submit region end(Prohibit modification and deletion)
