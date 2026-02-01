//Given two strings s and t, return true if they are equal when both are typed
//into empty text editors. '#' means a backspace character.
//
// Note that after backspacing an empty text, the text will continue empty.
//
//
// Example 1:
//
//
//Input: s = "ab#c", t = "ad#c"
//Output: true
//Explanation: Both s and t become "ac".
//
//
// Example 2:
//
//
//Input: s = "ab##", t = "c#d#"
//Output: true
//Explanation: Both s and t become "".
//
//
// Example 3:
//
//
//Input: s = "a##c", t = "#a#c"
//Output: true
//Explanation: Both s and t become "c".
//
//
// Example 4:
//
//
//Input: s = "a#c", t = "b"
//Output: false
//Explanation: s becomes "c" while t becomes "b".
//
//
//
// Constraints:
//
//
// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.
//
//
//
// Follow up: Can you solve it in O(n) time and O(1) space?
// Related Topics Two Pointers String Stack Simulation
// 👍 2646 👎 119

//leetcode submit region begin(Prohibit modification and deletion)
function backspaceCompare(s: string, t: string): boolean {
  let pointerS = s.length - 1,
    pointerT = t.length - 1;

  while (pointerS >= 0 || pointerT >= 0) {
    if (t[pointerT] === "#") {
      let stepsT = 2;

      while (stepsT > 0) {
        pointerT--;
        stepsT--;
        if (t[pointerT] === "#") {
          stepsT += 2;
          // pointerT--;
          // stepsT--;
        }
      }
    }
    if (s[pointerS] === "#") {
      let stepsS = 2;

      while (stepsS > 0) {
        pointerS--;
        stepsS--;
        if (s[pointerS] === "#") {
          stepsS += 2;
          // pointerS--;
          // stepsS--;
        }
      }
    }

    if (s[pointerS] !== t[pointerT]) {
      return false;
    } else {
      pointerT--;
      pointerS--;
    }
  }

  return true;
}
//leetcode submit region end(Prohibit modification and deletion)
