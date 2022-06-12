// const {performance} = require('perf_hooks');

// ________________________________________________________________________

// todo: FINISH THIS
// console.log(
//   function expandFromCenter(str: string, left: number, right: number) {
//     if (str == null || left > right ) return 0
//
//     while(left >= 0 && right < str.length && str.charAt(left) == str.charAt(right)) {
//       left--;
//       right++;
//     }
//
//     return right - left - 1;
//   }
// )


import { simpleNode, SimpleNode } from "./leetcode/editor/en";

console.log(
  (function ()  {

  })()
)

// NEED EXPLANATION
// console.log(
//   (function excel_sheet_column(columnNumber: number): string {
//     let excelColumn = '';
//     let charCode;
//
//     while (columnNumber > 0) {
//       charCode = (columnNumber - 1) % 26;
//       excelColumn = String.fromCharCode(65 + charCode) + excelColumn;
//       columnNumber = (columnNumber - charCode) / 26 | 0;
//     }
//     return excelColumn;
//   })(500)
//   // })(28)
//   // })(26)
// )
