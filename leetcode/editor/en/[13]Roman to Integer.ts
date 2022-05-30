//Roman numerals are represented by seven different symbols: I, V, X, L, C, D 
//and M. 
//
// 
//Symbol       Value
//I             1
//V             5
//X             10
//L             50
//C             100
//D             500
//M             1000 
//
// For example, 2 is written as II in Roman numeral, just two one's added 
//together. 12 is written as XII, which is simply X + II. The number 27 is written as 
//XXVII, which is XX + V + II. 
//
// Roman numerals are usually written largest to smallest from left to right. 
//However, the numeral for four is not IIII. Instead, the number four is written as 
//IV. Because the one is before the five we subtract it making four. The same 
//principle applies to the number nine, which is written as IX. There are six 
//instances where subtraction is used: 
//
// 
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900. 
// 
//
// Given a roman numeral, convert it to an integer. 
//
// 
// Example 1: 
//
// 
//Input: s = "III"
//Output: 3
//Explanation: III = 3.
// 
//
// Example 2: 
//
// 
//Input: s = "LVIII"
//Output: 58
//Explanation: L = 50, V= 5, III = 3.
// 
//
// Example 3: 
//
// 
//Input: s = "MCMXCIV"
//Output: 1994
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// 
//
// 
// Constraints: 
//
// 
// 1 <= s.length <= 15 
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M'). 
// It is guaranteed that s is a valid roman numeral in the range [1, 3999]. 
// 
// Related Topics Hash Table Math String 👍 4211 👎 292



//leetcode submit region begin(Prohibit modification and deletion)
function romanToInt(s: string): number {
  let rmMap = new Map<string, number>();
  rmMap.set("I",1)
  rmMap.set("V",5)
  rmMap.set("X",10)
  rmMap.set("L",50)
  rmMap.set("C",100)
  rmMap.set("D",500)
  rmMap.set("M",1000)

  let  minusOne =[ "V","X"];
  let  minusTen = ["L", "C"];
  let  minusHundo = ["D","M"];
  if (s.length>15) return 0;

  // create map of conversion

  let finalNum = 0;

  // break string input into array to iterate over
  const sArr = Array.from(String(s));
  // Or
  const sArr1 = [...s.split("")];

  for (let i = 0; i < sArr.length; i++) {
    let rn = sArr[i];
    let nextNumeral = sArr[i+1];

    if (rn === "I" && minusOne.includes(nextNumeral)){
      finalNum+=-1;
      finalNum+=rmMap.get(nextNumeral)!;
      i++
    }
    else if (rn === "X" && minusTen.includes(nextNumeral)){
      finalNum+=-10;
      finalNum+=rmMap.get(nextNumeral)!;
      i++
    }
    else if (rn === "C" && minusHundo.includes(nextNumeral)){
      finalNum+=-100;
      finalNum+=rmMap.get(nextNumeral)!;
      i++
    }
    else {
      finalNum += rmMap.get(rn)!
    }
  }

  return finalNum;
};
//leetcode submit region end(Prohibit modification and deletion)
