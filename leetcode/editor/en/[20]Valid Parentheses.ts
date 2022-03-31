//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']
//', determine if the input string is valid. 
//
// An input string is valid if: 
//
// 
// Open brackets must be closed by the same type of brackets. 
// Open brackets must be closed in the correct order. 
// 
//
// 
// Example 1: 
//
// 
//Input: s = "()"
//Output: true
// 
//
// Example 2: 
//
// 
//Input: s = "()[]{}"
//Output: true
// 
//
// Example 3: 
//
// 
//Input: s = "(]"
//Output: false
// 
//
// Example 4: 
//
// 
//Input: s = "([)]"
//Output: false
// 
//
// Example 5: 
//
// 
//Input: s = "{[]}"
//Output: true
// 
//
// 
// Constraints: 
//
// 
// 1 <= s.length <= 10⁴ 
// s consists of parentheses only '()[]{}'. 
// 
// Related Topics String Stack 👍 8961 👎 351


//leetcode submit region begin(Prohibit modification and deletion)
const parens = {
  '(': ')',
  '[': ']',
  '{': '}'
}

function isValid(s: string): boolean {

  if (s.length === 0) return true

  const stack = [];

  for (let i = 0; i < s.length; i++){
    if (parens[s[i]]){
      stack.push(s[i])
    } else {
      const leftBracket = stack.pop();
      const matchingBracket = parens[leftBracket];
      if ( s[i] !== matchingBracket ) return false
    }
  }

  return stack.length === 0
}
//leetcode submit region end(Prohibit modification and deletion)
