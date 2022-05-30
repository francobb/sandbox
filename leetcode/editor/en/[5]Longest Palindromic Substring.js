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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function expandFromCenter(str, left, right) {
    if (str == null || left > right)
        return 0;
    while (left >= 0 && right < str.length && str.charAt(left) == str.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}
//leetcode submit region begin(Prohibit modification and deletion)
function longestPalindrome(s) {
    if (s == null || s.length < 1)
        return "";
    var _a = __read([0, 0], 2), start = _a[0], end = _a[1];
    for (var i = 0; i < s.length; i++) {
        var len1 = expandFromCenter(s, i, i);
        var len2 = expandFromCenter(s, i, i + 1);
        var len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - ((len - 1) / 2);
            end = i + (len / 2);
        }
    }
    console.log("LOOK HERE ===:::::::=== " + s.substring(start, end + 1));
    return s.substring(start, end + 1);
}
;
longestPalindrome("babad");
//leetcode submit region end(Prohibit modification and deletion)
