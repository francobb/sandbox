//You are given a string s of even length. Split this string into two halves of 
//equal lengths, and let a be the first half and b be the second half. 
//
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 
//'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and 
//lowercase letters. 
//
// Return true if a and b are alike. Otherwise, return false. 
//
// 
// Example 1: 
//
// 
//Input: s = "book"
//Output: true
//Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. 
//Therefore, they are alike.
// 
//
// Example 2: 
//
// 
//Input: s = "textbook"
//Output: false
//Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. 
//Therefore, they are not alike.
//Notice that the vowel o is counted twice.
// 
//
// 
// Constraints: 
//
// 
// 2 <= s.length <= 1000 
// s.length is even. 
// s consists of uppercase and lowercase letters. 
// 
//
// Related Topics String Counting 👍 1447 👎 77


//leetcode submit region begin(Prohibit modification and deletion)
function halvesAreAlike(s: string): boolean {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // split in half
  let [[p1, pl], [p2, pr]] = [[0, 0], [s.length-1, 0]];

  // let p1 = 0;
  // let p2 = s.length-1;
  // let pl = 0;
  // let pr = 0;

  while(p1 <= p2) {
    if (vowels.includes(s[p1])) pl++
    if (vowels.includes(s[p2])) pr++
    p1++;
    p2--;
  }


  return pl === pr;
};
//leetcode submit region end(Prohibit modification and deletion)
