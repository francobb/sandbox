//Given an array of strings words, return the first palindromic string in the 
//array. If there is no such string, return an empty string "". 
//
// A string is palindromic if it reads the same forward and backward. 
//
// 
// Example 1: 
//
// 
//Input: words = ["abc","car","ada","racecar","cool"]
//Output: "ada"
//Explanation: The first string that is palindromic is "ada".
//Note that "racecar" is also palindromic, but it is not the first.
// 
//
// Example 2: 
//
// 
//Input: words = ["notapalindrome","racecar"]
//Output: "racecar"
//Explanation: The first and only string that is palindromic is "racecar".
// 
//
// Example 3: 
//
// 
//Input: words = ["def","ghi"]
//Output: ""
//Explanation: There are no palindromic strings, so the empty string is 
//returned.
// 
//
// 
// Constraints: 
//
// 
// 1 <= words.length <= 100 
// 1 <= words[i].length <= 100 
// words[i] consists only of lowercase English letters. 
// 
// Related Topics Array Two Pointers String 👍 399 👎 12
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//leetcode submit region begin(Prohibit modification and deletion)
function firstPalindrome(words) {
    var e_1, _a;
    if (!words.length)
        return "";
    var isPalindrome = function (wrd) {
        var _a = __read([0, wrd.length - 1], 2), l = _a[0], r = _a[1];
        while (l < r) {
            if (wrd.charAt(l) === wrd.charAt(r))
                (l++, r++);
            else
                return false;
        }
        return true;
    };
    try {
        for (var words_1 = __values(words), words_1_1 = words_1.next(); !words_1_1.done; words_1_1 = words_1.next()) {
            var word = words_1_1.value;
            // implementation 1
            var w = __spreadArray([], __read(word), false).reverse().join("");
            if (word === w)
                return word;
            //implementation 2
            if (word === w)
                return word;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (words_1_1 && !words_1_1.done && (_a = words_1.return)) _a.call(words_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return "";
}
;
//leetcode submit region end(Prohibit modification and deletion)
console.log(firstPalindrome(["def", "ghi"]));
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["notapalindrome", "racecar"]));
