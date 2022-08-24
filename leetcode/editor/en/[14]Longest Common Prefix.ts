//Write a function to find the longest common prefix string amongst an array of 
//strings. 
//
// If there is no common prefix, return an empty string "". 
//
// 
// Example 1: 
//
// 
//Input: strs = ["flower","flow","flight"]
//Output: "fl"
// 
//
// Example 2: 
//
// 
//Input: strs = ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.
// 
//
// 
// Constraints: 
//
// 
// 1 <= strs.length <= 200 
// 0 <= strs[i].length <= 200 
// strs[i] consists of only lower-case English letters. 
// 
// Related Topics String 👍 8046 👎 3006


//leetcode submit region begin(Prohibit modification and deletion)
function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 0) return ""

  let prefix = strs[0]; // compare to first element in string

  //loop through array
  strs.forEach((wrd, i) => {
    if (wrd==prefix) return;
    //if prefix is not in the current word
    while(strs[i].indexOf(prefix) != 0) {
      prefix=prefix.slice(0, -1);  // take out a letter from prefix
    }
  })
  return prefix;
};
//leetcode submit region end(Prohibit modification and deletion)
