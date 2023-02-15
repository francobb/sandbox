//Given a string s, find the first non-repeating character in it and return its 
//index. If it does not exist, return -1. 
//
// 
// Example 1: 
// Input: s = "leetcode"
//Output: 0
// 
// Example 2: 
// Input: s = "loveleetcode"
//Output: 2
// 
// Example 3: 
// Input: s = "aabb"
//Output: -1
// 
// 
// Constraints: 
//
// 
// 1 <= s.length <= 10⁵ 
// s consists of only lowercase English letters. 
// 
//
// Related Topics Hash Table String Queue Counting 👍 7063 👎 234


//leetcode submit region begin(Prohibit modification and deletion)

function firstUniqChar(s: string): number {
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    let current=s[i];

    if (!set.has(current) && s.substring(i+1).search(current) < 0 ){
      return i;
    }

    set.add(current);
  }
  return -1
};

//leetcode submit region end(Prohibit modification and deletion)
