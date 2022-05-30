//Given two strings s and t, return true if t is an anagram of s, and false 
//otherwise. 
//
// An Anagram is a word or phrase formed by rearranging the letters of a 
//different word or phrase, typically using all the original letters exactly once. 
//
// 
// Example 1: 
// Input: s = "anagram", t = "nagaram"
//Output: true
// Example 2: 
// Input: s = "rat", t = "car"
//Output: false
// 
// 
// Constraints: 
//
// 
// 1 <= s.length, t.length <= 5 * 10⁴ 
// s and t consist of lowercase English letters. 
// 
//
// 
// Follow up: What if the inputs contain Unicode characters? How would you 
//adapt your solution to such a case? 
// Related Topics Hash Table String Sorting 👍 4933 👎 217


//leetcode submit region begin(Prohibit modification and deletion)
function isAnagram(s: string, t: string): boolean {
  if (!s||!t) return false
  return [...s].sort().join("").replace("/[^\w]/g", "").toLowerCase() === [...t].sort().join("").replace("/[^\w]/g", "").toLowerCase()
};
//leetcode submit region end(Prohibit modification and deletion)
