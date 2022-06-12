//Given two binary strings a and b, return their sum as a binary string. 
//
// 
// Example 1: 
// Input: a = "11", b = "1"
//Output: "100"
// Example 2: 
// Input: a = "1010", b = "1011"
//Output: "10101"
// 1011
// 1010
//  10101
// Constraints: 
//
// 
// 1 <= a.length, b.length <= 10⁴ 
// a and b consist only of '0' or '1' characters. 
// Each string does not contain leading zeros except for the zero itself. 
// 
// Related Topics Math String Bit Manipulation Simulation 👍 5056 👎 553


//leetcode submit region begin(Prohibit modification and deletion)
function addBinary(a: string, b: string): string {
  let carry = 0;
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let result = "";

  while (aIndex >= 0 || bIndex >= 0) {
    let ai = (aIndex >= 0 && a[aIndex] == "1") ? 1 : 0;
    let bi = (bIndex >= 0 && b[bIndex] == "1") ? 1 : 0;

    let sum = ai + bi + carry;
    carry = sum > 1 ? 1 : 0;
    let ci = sum % 2;

    result = ci.toString() + result;

    aIndex--;
    bIndex--;
  }

  if (carry > 0) {
    result = carry.toString() + result;
  }
  return result;
};
//leetcode submit region end(Prohibit modification and deletion)