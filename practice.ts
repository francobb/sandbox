// @ts-nocheck
import { simpleNode, SimpleNode, treeNode, TreeNode } from "./leetcode/editor/en";

  /**
   * [ARRAY]
   *
   * */
  {
    /**
     * [1] two_sum ✅
     *
     * */
    {
      (function (nums, number) {
        let map = new Map();

        for (let index = 0; index < nums.length; index++) {
          let current = nums[index];
          let target = number - nums[index];

          if (map.has(target)) {
            console.log([index, map.get(target)]);
            return [map.get(target), index];
          } else {
            map.set(current, index);
          }
        }
      })([3, 3], 6);
    }

    /**
     * [42] Trap Rain Water ✅
     *
     * *****/
    {
      (function (height: number[]): number {
        let lP = 0,
            rP = height.length - 1;
        let [maxL, maxR, maxH20] = [0, 0, 0];

        while (lP <= rP) {
          if (height[lP] <= height[rP]) {
            if (height[lP] >= maxL) maxL = height[lP];
            else maxH20 += maxL - height[lP];
            lP++;
          } else {
            if (height[rP] >= maxR) maxR = height[rP];
            else maxH20 += maxR - height[rP];
            rP--;
          }
        }

        // console.log({ maxH20 });
        return maxH20;
      })([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
    }

    /**
     * [11] Container most water ✅
     *
     * */
    {
      (function (height: number[]): number {
        let totalArea = 0;
        let leftP = 0,
            rightP = height.length - 1;

        while (leftP <= rightP) {
          let yPos = Math.min(height[leftP], height[rightP]);
          let xPos = rightP - leftP;
          totalArea = Math.max(xPos * yPos, totalArea);

          if (height[leftP] < height[rightP]) {
            leftP++;
          } else {
            rightP--;
          }
        }

        return totalArea;
      })([1, 8, 6, 2, 5, 4, 8, 3, 7]);
      // })([4,3,2,1,4]);
      // })([1,2,1]);
    }

    /**
     *
     * [15] 3_sum
     *
     **/
    {
      (
        (nums: number[]): number[][] => {
        nums.sort((a,b) => a - b);
        let finalArr = [];
        for (let i = 0; i < nums.length; i++) {
          if (i > 0 && nums[i] == nums[i -1]) continue
          let leftP = i+1, rightP = nums.length-1;
          let target = 0 - nums[i];

          while(leftP < rightP){
            const sum = nums[leftP] + nums[rightP];
            if (sum < target){
              leftP++;
            } else if( sum > target) {
              rightP--;
            } else {
              finalArr.push(nums[i], nums[leftP], nums[rightP]);
              // skip duplicates
              while(nums[leftP]=== nums[leftP+1]) leftP++;
              while(nums[rightP]=== nums[rightP-1]) rightP--;
              leftP++;
              rightP--;
            }
          }
        }

          return finalArr;
        }
      ) ([-1,0,1,2,-1,-4])
    }

    /**
     *
     * [17] contains_duplicate
     *
     **/
    {
      let contains_duplicate = (nums: number[]) => {
        if (nums.length===0) return false;
        let numSet = new Set(nums);
        return numSet.size != nums.length;
      };

      function duplicateContains(nums: number[]){
        nums.sort()
        return nums.some((el, idx) => el === nums[idx + 1]);
      }

      function contains_Duplicate(nums: number[]): boolean {
        let hs = new Set();
        for (let i = 0; i < nums.length; i++) {
          if (hs.has(nums[i])) return true;
          if (!hs.has(nums[i])) hs.add(nums[i]);
        }
        return false;
      }
      console.log(duplicateContains([1,1,1,3,3,4,3,2,4,2]));
    }

    /**
     * Array Chunking
     *
     * *****/
    {
      (function(arr: number[], size: number) {
        let finalArr = []
        // version one
        for (const num in arr) {
          let last = finalArr[finalArr.length -1]
          if(!last || last.length === size){
            finalArr.push([num])
          } else {
            last.push(num);
          }
        }
        return finalArr

        // version two
        let count = 0;
        while (count < arr.length) {
          finalArr.push(arr.slice(count, count + size));
          count+=size;
        }
        console.log({ finalArr });
        return finalArr
      })
      ([1,2,3,4,5], 3)
    }
  }
  //------------------------------------------------

  /**
   * [STRING]
   *
   * */
  {
    /**
     * [3] longest_substring ✅
     *
     * */
    {
      ((s) => {
        let s_array = s.split("");
        let count = 0;
        // @ts-ignore
        let map_count = new Set();

        for (let index = 0; index < s_array.length; index++) {
          let currentLetter = s_array[index];
          if (map_count.has(currentLetter)) {
            map_count.clear();
            map_count.add(currentLetter);
          } else {
            map_count.add(currentLetter);
            count = Math.max(map_count.size, count);
          }
        }
        return count;
      })
      ("abcabcbb");
      // ("dvdf")
      // ("abba")
    }

    /**
     * [844] backspace string compare ✅
     *
     * *****/
    {
      ((s: string, l: string): boolean => {
        let sPointer = 0;
        let rPointer = 0;
        let newS = [];
        let newL = [];
        while (sPointer < s.length || rPointer < l.length) {
          if (s[sPointer] === "#") {
            newS.pop();
          } else {
            if (s[sPointer]) newS.push(s[sPointer]);
          }

          if (l[rPointer] === "#") {
            newL.pop();
          } else {
            if (l[rPointer]) newL.push(l[rPointer]);
          }

          sPointer++;
          rPointer++;
        }
        return newS !== newL;
      }
      )("a#c", "b");
      // )("ab#c", "ab#c")
      // )("a##c", "#a#c")
      // )("rjhbpvh", "rm#jhbpvh")
    }

    /**
     * [344] String reverse ✅
     *
     * *****/
    {
      (function(str: string) {
        // version one
        let reversed = '';
        for (let char of str) {
          reversed = char + reversed
          console.info({ reversed });
        }

        // version two
        str.split("").reduce((rev, char) => char + rev, '')

        // version three
        return str.split('').reverse().join('');
      })("reverse")
    }

    /**
     * [242] Valid Anagram ✅
     *
     * *****/
    {
      ((s: string, t: string): boolean => {

        // sort each str
        let sS = s.replace("/[^\w]/g", "").split('').sort().join("").toLowerCase();
        let tS = t.replace("/[^\w]/g", "").split("").sort().join("").toLowerCase();

        if (tS.length != sS.length) {
          console.assert(sS.length == tS.length, "They do Not equal ");
          return false
        }

        if (tS.indexOf(sS) != 0) {
          console.assert(tS.indexOf(sS) !== 0, "letter don't equal");
          return false
        }

        console.log({ sS, tS });

        return true
      })("anagram", "car");


      ((s: string, t: string): boolean => {

        if (!s || !t) return false
        return [...s].sort().join("").replace("/[^\w]/g", "").toLowerCase() === [...t].sort().join("").replace("/[^\w]/g", "").toLowerCase()

      })("anagram", "nagaram")

    }

    /**
     *
     * [09] Palindrome number
     *
     **/
    {
      (function is_palindrome(x: number): boolean {
        // turn number into array
        let xS1 = "" + x;
        let arr = [...xS1.split("")];
        let xS2 = Array.from(String(x));
        let xN2 = Array.from(String(x), Number);


        // let numArr = [...x];
        // if (x < 2) return false;
        let [lp, rp] = [0, arr.length - 1];
        while (lp <= rp) {
          if (arr[lp] != arr[rp]) return false;
          lp++;
          rp--;
        }

        return true;
      })(151)
    }

    /**
     *
     * [58] Length of last word
     *
     **/
    {
      (function lengthOfLastWord(s: string): number {
        let arr = s.split(" ").filter(v => v);
        let l = arr[arr.length - 1].length;
        return l;
      })(" fly me to the moon ")

    }

    /**
     * [290] Word Pattern
     */
    {
      (function wordPattern(pattern: string, s: string): boolean {
        if (!pattern || !s.length) return false;
        let sArray = s.split(" ");
        if (pattern.length !== sArray.length) return false;
        let sMap = {};
        let pMap = {};
        let left = 0;

        while (left < sArray.length) {
          let currentP = pattern[left];
          let currentS = sArray[left];
          if (!sMap[currentS] && !pMap[currentP]) {
            pMap[currentP] = currentS;
            sMap[currentS] = currentP;
          } else if (pMap[currentP] !== currentS) {
            return false
          }
          left++;
        }

        return true;
        // })("aaaa", "dog cat cat dog")
        // })("abcd", "dog cat cat dog")
        // })("abdd", "dog cat fish bird")
        // })("abba", "dog cat cat dog")
        // })("abba", "dog dog dog dog")
        // })("abaaa", "dog cat cat dog dog")
        // })("abc", "b c a")
      })("ab", "hannah heather")
    }

    /**
     * [14] Longest Common Prefix
     */
    {
      //   function longestCommonPrefix(strs: string[]): string {
      //     if (strs.length == 0) return ""
      //
      //     let prefix = strs[0]; // compare to first element in string
      //
      //     //loop through array
      //     strs.forEach((wrd, i) => {
      //       if (wrd==prefix) return;
      //       //if prefix is not in the current word
      //       while(strs[i].indexOf(prefix) != 0) {
      //         prefix=prefix.slice(0, -1);  // take out a letter from prefix
      //       }
      //     })
      //     return prefix;
      //     // })(["flower","flow","flight"])
      //   // })(["dog", "racecar", "car"]
      // }
    }

    /**
     * Roman Integer ✅
     *
     * *****/
    {
      let rmMap = new Map<string, number>();
      rmMap.set("I", 1)
      rmMap.set("V", 5)
      rmMap.set("X", 10)
      rmMap.set("L", 50)
      rmMap.set("C", 100)
      rmMap.set("D", 500)
      rmMap.set("M", 1000)

      let minusOne = ["V", "X"];
      let minusTen = ["L", "C"];
      let minusHundo = ["D", "M"];
      (function roman_to_int(s: string): number {
        if (s.length > 15) return 0;

        // create map of conversion

        let finalNum = 0;

        // break string input into array to iterate over
        const sArr = Array.from(String(s));
        // Or
        const sArr1 = [...s.split("")];

        for (let i = 0; i < sArr.length; i++) {
          let rn = sArr[i];
          let nextNumeral = sArr[i + 1];

          if (rn === "I" && minusOne.indexOf(nextNumeral)) {
            finalNum += -1;
            finalNum += rmMap.get(nextNumeral)!;
            i++
          } else if (rn === "X" && minusTen.indexOf(nextNumeral)) {
            finalNum += -10;
            finalNum += rmMap.get(nextNumeral)!;
            i++
          } else if (rn === "C" && minusHundo.indexOf(nextNumeral)) {
            finalNum += -100;
            finalNum += rmMap.get(nextNumeral)!;
            i++
          } else {
            finalNum += rmMap.get(rn)!
          }
        }

        return finalNum;
      })("MCMXCIV")
    }

    /**
     * Roman To Int
     */
    {
      (function romanToInt(s: string): number {
        const roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
        if (s.length > 15) return 0;

        // create map of conversion
        let ans = 0;

        for (let i = s.length - 1; ~i; i--) {
          let num = roman[s.charAt(i)]
          if (4 * num < ans) ans -= num
          else ans += num
        }

        return ans
      })("MCMXCIV")
    }

    /**
     *
     *  Valid Palindrome string
     *
     **/
    {
      (function is_palindrome1(str: string): boolean {
        // turn number into array
        return str.split("").every((c, i) => {
          return c === str.charAt(str.length - i - 1);
        })
      })("abba");

      (function is_palindrome2(str: string): boolean {
        // turn number into array
        let rStr = str.split("").reverse().join("");
        return str === rStr;
      })("abba");

    }

    /**
     * Reverse int
     */
    {
      (function(n: number) {
        let p = n.toString().split('').reverse().join('');
        return parseInt(p) * Math.sign(n);
      })(-51)
    }

    /**
     * FizzBuzz
     */
    {
      ( function fizzBuzz(n: number) {

        let count = 1;
        while (count <= n) {
          let fizz = count % 3 == 0 ? "fizz" : "";
          let buzz = count % 5 == 0 ? "buzz" : "";
          console.log(`${count} :::: ${fizz}${buzz}`);

          count++;
        }

      }(20))
      // fizzBuzz(5)
      // fizzBuzz(5)}
    }

    /**
     * Steps
     * **/
    {
      ((n: number) => {
          for (let i = 0; i < n; i++) {
            let stair = '';
            let count = 0;
            while(count < n) {
              if (count <= i){
                stair += "#"
              } else {
                stair += "_"
              }
              count++;
            }
            console.log(`'${stair}'`);
          }
        }
      )(3)
    }

  }
  //------------------------------------------------

  /**
   * [STACK]
   *
   * */
  {
    /**
     * Valid Parenthesis ✅
     *
     * */
    {
      const parens1 = {
        "(": ")",
        "[": "]",
        "{": "}",
      };
      type parens = "(" | "[" | "{";
      ((s: string): boolean => {
        if (s.length === 0) return true;

        let stack: parens[] = [];
        let pointer = 0;

        while (pointer < s.length) {
          if (parens1.hasOwnProperty(s[pointer])) {
            stack.push(s[pointer] as parens);
          } else {
            let current = s[pointer];
            let match = stack.pop();

            // console.log(parens1[match!] === current);
            return parens1[match as parens] === current;
          }

          pointer++;
        }

        return stack.length === 0;
        // })("()[]{}");
        // })("{[]}");
      })("([)]");
    }
  }
//------------------------------------------------

  /**
   *
   * [BINARY Tree]
   *
   **/
  {
    let rootNode = new TreeNode(
      3,
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      new TreeNode(9)
    );
    let otherNode = new TreeNode(
      3,
      new TreeNode(
        6,
        new TreeNode(9, null, new TreeNode(5, new TreeNode(8), null)),
        new TreeNode(2, null, null)
      ),
      new TreeNode(1, null, new TreeNode(4, null, null))
    );
    /*
         In-Order                 Pre-Order                Post-Order
          [2] 1                   [1]  1                    [3] 1

        [1]3   4 [3]          [2] 3     4 [3]          [1] 3     4 [2]
    */
    {
      /**
       * Depth First Search in-order traversal
       *
       */
      {
        const traverse = (root, stack) => {
          if (root) {
            traverse(root.left, stack);
            stack.push(root.val);
            traverse(root.right, stack);
          }
          return stack;
        };
        ((root: TreeNode | null): number => traverse(root, []))(treeNode);
      }

      /**
       * Depth first Search pre-order traversal
       *
       */
      {
        const preorderTraversal = (root) => traverse(root, []);
        const traverse = (root, stack) => {
          if (root) {
            stack.push(root.val);
            traverse(root.left, stack);
            traverse(root.right, stack);
          }
          return stack;
        };
      }

      /**
       * Depth first Search post-order traversal
       *
       * *****/
      {
        const traverse = (root, stack) => {
          if (root) {
            traverse(root.left, stack);
            traverse(root.right, stack);
            stack.push(root.val);
          }
          return stack;
        };
      }

      /**
       * Depth First Search MAX DEPTH ✅ O(n)
       *
       */
      {
        (function depth_of_tree(root: TreeNode | null): number {

          function recursiveFunction(
            node: TreeNode | null,
            count: number
          ): number {
            if (!node) return count;
            return Math.max(
              recursiveFunction(node.left, count + 1),
              recursiveFunction(node.right, count + 1)
            );
          }

          return recursiveFunction(rootNode, 0);
        })(rootNode);
      }

      /**
       * binary tree values at each level order bfs ✅ O(n)
       *
       * *****/
      {
        /**
         * breadth 1st (queue) In Order traversal
         *
         * *****/
        (function(root: TreeNode | null): number[][] {
          if (!root) return [];
          let result: number[][] = [];
          let queue = [root];
          while (queue.length) {
            const length = queue.length;
            let count = 0;
            const subArray = [];

            while (count < length) {
              let node = queue.shift();
              if (node) {
                if (node.val) subArray.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
              }
              count++;
            }

            result.push(subArray);
          }

          return result;
        })(otherNode);

        /**
         * Depth 1st in order no queue recursive
         *
         * *****/
        (function depth_of_tree(root: TreeNode | null): number[][] {
          let maxDepth: number[][] = [];
          let level = 0;

          function recursiveFunction(
            node: TreeNode | null,
            results: number[][],
            level: number
          ): number[][] {
            if (!node) return results;

            if (results[level]) {
              results[level].push(node.val);
            } else {
              let temp = [node.val];
              results[level] = temp;
            }
            if (node.left) recursiveFunction(node.left, results, level + 1);
            if (node.right) recursiveFunction(node.right, results, level + 1);
            return results;
          }

          recursiveFunction(root, maxDepth, level);
          return maxDepth;
          // })(rootNode);
        })(otherNode);
      }

      /**
       * binary tree right side depth first ✅
       *
       * *****/
      {
        const dfs = (node: TreeNode | null, level: number, result: number[]) => {
          if (!node) return;
          if (level >= result.length) result.push(node.val);
          if (node.right) dfs(node.right, level + 1, result);
          if (node.left) dfs(node.left, level + 1, result);
          return result;
        };
        (function(root: TreeNode | null) {
          const res: number[] = [];
          dfs(root, 1, res);
          return res;
        })(otherNode);

        const right_tree_side = (root: TreeNode | null): number[][] => {
          let queue: TreeNode[] = [root];
          let finalArray = [];

          while (queue.length) {
            let length = queue.length;
            let count = 0;
            let subArray = [];
            while (count < length) {
              let current = queue.shift();
              if (current) {
                queue.push(current.right, current.left);
                subArray.push(current.val);
              }
              count++;
            }

            finalArray.push(subArray);
          }

          return finalArray;
        };
        right_tree_side(otherNode);
      }

      /**
       * binary tree count the nodes 0(n) ✅
       *
       * *****/
      {
        const countNodesAgain = (root: TreeNode | null): number => {
          if (root === null) return 0;
          return countNodesAgain(root.left) + countNodesAgain(root.left) + 1;
        };
      }

      /**
       *
       * Width at each level
       *
       * **/
      {
        (function(root: SimpleNode | null): number[] {
          let final = []
          let queue = [root];

          while (queue.length) {
            final.push(queue.length);
            let count = queue.length;
            while (count > 0) {
              let currentNode = queue.shift();
              if (currentNode.children) queue.push(...currentNode.children);
              count--;
            }
          }

          return final;
        })(simpleNode)
      }
    }
  }
//------------------------------------------------

  /**
   *
   * [BINARY SEARCH]
   *
   **/
  {

    /**
     * binary search count the nodes 0(log n) ✅
     *
     * **/
    {
      const getHeight = (node: TreeNode | null, count: number): number => {
        if (!node) return count;
        return Math.max(getHeight(node.left, count + 1));
      };
      const nodeExists = (mid: number, height: number, root: TreeNode) => {
        let [left, right, localHeight] = [0, Math.pow(2, height) - 1, 0];

        while (localHeight < height) {
          let middle = Math.ceil((left + right) / 2);

          if (mid >= middle) {
            root = root.right;
            left = middle; // inclusive
          } else {
            root = root.left;
            right = middle - 1;
          }
          localHeight++;
        }

        return root !== null;
      };
      const countNodes = function(root: TreeNode) {
        if (!root) return 0;

        const height = getHeight(root, 0);

        if (height === 0) return 1;

        const upperCount = Math.pow(2, height) - 1;

        let [left, right] = [0, upperCount];

        while (left < right) {
          let mid = Math.ceil((left + right) / 2);
          if (nodeExists(mid, height, root)) {
            left = mid;
          } else {
            right = mid - 1;
          }
        }

        return upperCount + left + 1;
      };
      ((root: TreeNode) => {
        if (!root) {
          return;
        }

        let height = getHeight(root, 0);

        if (height === 0) return 1;

        let upperPart = Math.pow(2, height) - 1;

        let left = 0;
        let right = upperPart;

        while (left < right) {
          let mid = Math.ceil((left + right) / 2);

          if (nodeExists(mid, height, root)) {
            left = mid;
          } else {
            right = mid - 1;
          }
        }

        return upperPart + left + 1;
      })(treeNode);
    }

    /**
     * 1st and last position of target O(log n) ✅
     *
     * *****/
    {
      type numOrUndefined = number | undefined;
      const binSearch = (
        array: number[],
        left: number,
        right: number,
        target: number
      ) => {
        while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          const midValue = array[mid];

          if (midValue === target) {
            return mid;
          } else if (midValue < target) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }

        return -1;
      };
      const firstAndLastPositionOfTarget = (nums: number[], target: number) => {
        if (nums.length === 0) return [-1, -1];
        const first_position = binSearch(nums, 0, nums.length - 1, target);
        if (first_position === -1) return [-1, -1];

        let start_position = first_position,
          end_position = first_position,
          temp_pos_1: numOrUndefined,
          temp_pos_2: numOrUndefined;

        while (start_position !== -1) {
          temp_pos_1 = start_position!;
          start_position = binSearch(nums, 0, start_position - 1, target);
        }
        start_position = temp_pos_1!;

        while (end_position !== -1) {
          temp_pos_2 = end_position!;
          end_position = binSearch(
            nums,
            end_position + 1,
            nums.length - 1,
            target
          );
        }
        end_position = temp_pos_2!;

        return [start_position, end_position];
      };
      const otherBinary = function(nums: number[], target: number) {
        let s = 0;
        let e = nums.length;
        let m;

        while (s <= e) {
          m = Math.floor((s + e) / 2);

          if (nums[m] >= target) {
            e = m - 1;
          } else {
            s = m + 1;
          }
        }

        if (nums[s] !== target) return [-1, -1];

        const tmpS = s;
        e = nums.length - 1;

        while (s <= e) {
          m = Math.floor((s + e) / 2);

          if (nums[m] <= target) {
            s = m + 1;
          } else {
            e = m - 1;
          }
        }

        return [tmpS, e];
      };

      // console.log(otherBinary([5,7,7,8,8,10], 8));
      // console.log(otherBinary([1], 1));
      // console.log(realBinary([1], 1));
      console.log(firstAndLastPositionOfTarget([1, 3, 5, 5, 5, 5, 8, 9], 5));
    }

  }
//------------------------------------------------

  /**
   *
   * [SORTING]
   *
   **/
  {
    /**
     * Median of sorted arrays O(n) ❌
     *
     * */
    {
      // (function (nums1: number[], nums2: number[]): number {
      //   let leftPointer = 0,
      //     rightPointer = 0,
      //     counter = 0;
      //   let finalArray: number[] = [];
      //   while (leftPointer < nums1.length || rightPointer < nums2.length) {
      //     if (nums1[leftPointer] < nums2[rightPointer]) {
      //       finalArray.push(nums1[leftPointer]);
      //       leftPointer++;
      //     } else {
      //       finalArray.push(nums2[rightPointer]);
      //       rightPointer++;
      //     }
      //   }
      //   return 0;
      // })([1, 2], [3, 4]);
      // (function (nums1: number[], nums2: number[]): number {
      //   let totalSize = nums1.length + nums2.length;
      //   let half = totalSize / 2;
      //   let isEven = half % 2 === 0;
      //   if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
      //   !isEven ? half = Math.floor(half): null;
      //
      //   let lPointer = 0,
      //     rPointer = nums1.length;
      //
      //   function getMax(nums: number[], i: number) {
      //     if (i == 0) return Number.NEGATIVE_INFINITY
      //     else return nums[i - 1];
      //   }
      //   function getMin(nums: number[], i: number) {
      //     if (i==nums.length) return Number.POSITIVE_INFINITY;
      //     else  return nums[i];
      //   }
      //
      //   while (lPointer <= rPointer) {
      //     let i = (lPointer + rPointer) / 2; // a
      //     let j = Math.floor((totalSize + 1) / 2 - i);
      //     // console.log({i, j});
      //
      //     let left1 = getMax(nums1, i);
      //     let right1 =  getMin(nums1, i);
      //
      //     let left2 = getMax(nums2, j);
      //     let right2 = getMin(nums2, j);
      //
      //     if (left1 <= right1 && left2 <= right2) {
      //       if (isEven){
      //         // [1, 2] [3, 4]
      //         console.log(Math.max(left1, left2) + Math.min(right1, right2) / 2)
      //         return Math.max(left1, left2) + Math.min(right1, right2) / 2
      //       }
      //       console.log(Math.max(left1, left2))
      //       return Math.max(left1, left2);
      //     }
      //
      //     if (left1 > right2){
      //       rPointer = i -1;
      //     } else {
      //       lPointer = i + 1;
      //     }
      //   }
      //   return Number(-1);
      // })([1, 2], [3, 4]);
      // })([1, 2, 9, 10], [-1, 0, 0, 2]);
    }

    /**
     * quickSort
     *
     * */
    {
      ((arr: number[], num: number) => {
        // find the partition
        const left = 0;
        const right = arr.length - 1;
        let indexToFind = arr.length - num;
        quickSort(arr, 0, arr.length - 1);

        function swap(array: number[], j: number, i: number) {
          const temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }

        function quickSort(items: number[], left: number, right: number) {
          while (left < right) {
            const partition = (items, start, end) => {
              let pivot = items[right];
              let finalIndexPosition = start;
              let positionTracker = start;
              while (positionTracker < right) {
                if (items[finalIndexPosition] < pivot) {
                  swap(items, positionTracker, finalIndexPosition);
                  finalIndexPosition++;
                }
                positionTracker++;
              }
              swap(arr, finalIndexPosition, end);
              return finalIndexPosition;
            };
            let position = partition(arr, left, right);
            quickSort(items, left, position - 1);
            quickSort(items, position + 1, right);
          }
        }

        return arr[indexToFind];
      })([5, 2, 3, 1, 2, 4, 5, 6, 3], 4);

      const swap = (array: number[], j: number, i: number) => {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      };

      const partition = (items, left, right) => {
        let pivot = items[Math.floor((right + left) / 2)], //middle element
          i = left, //left pointer
          j = right; //right pointer
        while (i <= j) {
          while (items[i] < pivot) {
            i++;
          }
          while (items[j] > pivot) {
            j--;
          }
          if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
          }
        }
        return i;
      };

      const quickSort = (array: number[], left: number, right: number) => {
        if (left < right) {
          const partitionIndex = partition(array, left, right);
          quickSort(array, left, partitionIndex - 1);
          quickSort(array, partitionIndex + 1, right);
        }
      };
      const quickSelect = function(
        array: number[],
        left: number,
        right: number,
        idxToFind
      ) {
        if (left < right) {
          const partitionIdx = partition(array, left, right);
          if (partitionIdx === idxToFind) {
            return array[partitionIdx];
          } else if (idxToFind < partitionIdx) {
            return quickSelect(array, left, partitionIdx - 1, idxToFind);
          } else {
            return quickSelect(array, partitionIdx + 1, right, idxToFind);
          }
        }
      };
    }
  }
//------------------------------------------------

  /**
   *
   * [LinkedList]
   *
   **/
  {
// @ts-ignore
// const linkedList: ListNode = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);
    const linkedList: any = [4, 3, 2, 0, 0, 0].reduce((acc, val) => new ListNode(val, acc), null);
// const l2: ListNode = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc as undefined) as any, null);
    const l2: any = [6, 5, 4].reduce((acc, val) => new ListNode(val, acc as undefined) as any, null);
// @ts-ignore
    const flattenLinkedList = (head: Node1 | null): Node1 | null => {
      if (!head) return head;
      let currentNode = head;
      while (head) {
        if (currentNode.child === null) {
          // if node doesn't have children keep it moving:
          if (currentNode.next != null) currentNode = currentNode.next;
        } else {
          let lastChildNode = currentNode.child; // make child node a variable.
          while (lastChildNode.next !== null) {
            // check if the child has a sibling
            lastChildNode = lastChildNode.next; // make sibling the
          }
          lastChildNode.next = currentNode.next;
          if (currentNode.next !== null) {
            lastChildNode.next.prev = lastChildNode;
          }
          currentNode.next = currentNode.child;
          currentNode.child.prev = currentNode;
          currentNode.child = null;
        }
      }
      return head;
    };
    let [node1, node2, node3, node4, node5] = [
      new ListNode(1),
      new ListNode(2),
      new ListNode(3),
      new ListNode(4),
      new ListNode(5),
    ];
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = null;

    /**
     * Reverse Linked List ✅
     *
     * */
    {
      const reverseList = (head: ListNode | null): ListNode | null => {
        let prev: ListNode = null; // What we checked
        let current: ListNode = head; // We are checking this
        let tempNext: ListNode; // To be checked
        while (current) {
          tempNext = current.next; // Store the node "current" is pointing to.
          current.next = prev; // Make "current" point to the previous node.
          prev = current; // Save the current node in "prev" for the next loop.
          current = tempNext; // Set "current" to be current's old next node for the next loop.
        }
        return prev; // Return what we checked
      };
      console.log(reverseList(node1));
    }

    /**
     * add Two numbers ✅
     *
     * */
    {
      // @ts-ignore
      function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        let p1 = l1, p2 = l2;
        let carryOver = 0;

        while (p1 || p2) {
          let val = 0;
          let val2 = 0;

          if (p1) {
            val = p1.val
            p1 = p1.next
          }
          if (p2) {
            val2 = p2.val
            p2 = p2.next;
          }
          let sum = val + val2 + carryOver;

          // if (sum > 9) {
          //   carryOver = 1;
          // } else {carryOver = 0}
          let n = new String("pAEBle")
          n.substring(0, 3)
          carryOver = Math.floor(sum / 10)
          let digit = sum % 10;

          // let sum = val+val2
          // if (carryOver) {
          //   carryOver--
          //   sum++
          // }
          // if (sum > 9){
          //   sum = 0
          //   carryOver = 1
          // }
          // console.log(val + "+" + val2 + "=" + sum)
        }

        return null;
      };
      addTwoNumbers(l2, node3)

    }
  }