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
function lengthOfLongestSubstring99(s) {
    if (s.length <= 1) {
        return s.length;
    }
    var pointer = 0, tempPointer = 0, maxSubString = 0, subArray = [];
    while (pointer < s.length) {
        // let map = new Map();
        if (subArray.includes(s[pointer])) {
            // if (map.has(s[pointer])) {
            subArray.length > maxSubString
                ? (maxSubString = subArray.length)
                : (subArray = [s[pointer]]);
        }
        else {
            // map.set(s[pointer], pointer);
            subArray.push(s[pointer]);
            subArray.length > maxSubString ? (maxSubString = subArray.length) : null;
        }
        pointer++;
    }
    for (var left = 0; left < s.length; left++) {
        var map = new Map();
        var currentLength = 0;
        for (var right = left; right < s.length; right++) {
            var currentChar = s[right];
            if (!map[currentChar]) {
                currentLength++;
                map[currentChar] = true;
                maxSubString = Math.max(maxSubString, currentLength);
            }
            else {
                break;
            }
        }
    }
    return maxSubString;
}
// console.log(lengthOfLongestSubstring1("dvdf"));
function lengthOfLongestSubstring2(s) {
    var left = 0;
    var longestSubString = 0;
    var seenChars = {};
    for (var right = 0; right < s.length; right++) {
        var leftChar = s[left];
        var currentChar = s[right];
        var prevCharPosition = seenChars[currentChar];
        if (prevCharPosition >= left) {
            left = prevCharPosition + 1;
        }
        seenChars[currentChar] = right;
        longestSubString = Math.max(longestSubString, right - left + 1);
    }
    return longestSubString;
}
// console.log(lengthOfLongestSubstring2("dvdf"));
// console.log(lengthOfLongestSubstring2("abcabcbb"));
function lengthOfLongestSubstring1(s) {
    var map = {};
    var left = 0;
    return s.split("").reduce(function (max, v, i) {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}
function lengthOfLongestSubstring4(s) {
    var e_1, _a;
    var substring = new Set();
    var max = 0;
    try {
        for (var s_1 = __values(s), s_1_1 = s_1.next(); !s_1_1.done; s_1_1 = s_1.next()) {
            var char = s_1_1.value;
            // Shrink window by removing left-most value
            while (substring.has(char)) {
                substring.delete(substring.values().next().value);
            }
            substring.add(char);
            max = Math.max(max, substring.size);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (s_1_1 && !s_1_1.done && (_a = s_1.return)) _a.call(s_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return max;
}
console.log(lengthOfLongestSubstring4("abcabcbb"));
