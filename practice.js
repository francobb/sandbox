var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
            var map = new Map();
            for (var index = 0; index < nums.length; index++) {
                var current = nums[index];
                var target = number - nums[index];
                if (map.has(target)) {
                    console.log([index, map.get(target)]);
                    return [map.get(target), index];
                }
                else {
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
        (function (height) {
            var lP = 0, rP = height.length - 1;
            var _a = __read([0, 0, 0], 3), maxL = _a[0], maxR = _a[1], maxH20 = _a[2];
            while (lP <= rP) {
                if (height[lP] <= height[rP]) {
                    if (height[lP] >= maxL)
                        maxL = height[lP];
                    else
                        maxH20 += maxL - height[lP];
                    lP++;
                }
                else {
                    if (height[rP] >= maxR)
                        maxR = height[rP];
                    else
                        maxH20 += maxR - height[rP];
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
        (function (height) {
            var totalArea = 0;
            var leftP = 0, rightP = height.length - 1;
            while (leftP <= rightP) {
                var yPos = Math.min(height[leftP], height[rightP]);
                var xPos = rightP - leftP;
                totalArea = Math.max(xPos * yPos, totalArea);
                if (height[leftP] < height[rightP]) {
                    leftP++;
                }
                else {
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
        (function (nums) {
            nums.sort(function (a, b) { return a - b; });
            var finalArr = [];
            for (var i = 0; i < nums.length; i++) {
                if (i > 0 && nums[i] == nums[i - 1])
                    continue;
                var leftP = i + 1, rightP = nums.length - 1;
                var target = 0 - nums[i];
                while (leftP < rightP) {
                    var sum = nums[leftP] + nums[rightP];
                    if (sum < target) {
                        leftP++;
                    }
                    else if (sum > target) {
                        rightP--;
                    }
                    else {
                        finalArr.push(nums[i], nums[leftP], nums[rightP]);
                        // skip duplicates
                        while (nums[leftP] === nums[leftP + 1])
                            leftP++;
                        while (nums[rightP] === nums[rightP + 1])
                            rightP++;
                        leftP++;
                        rightP--;
                    }
                }
            }
            return finalArr;
        })([-1, 0, 1, 2, -1, -4]);
    }
    /**
     * Array Chunking
     *
     * *****/
    {
        (function (arr, size) {
            var finalArr = [];
            // version one
            for (var num in arr) {
                var last = finalArr[finalArr.length - 1];
                if (!last || last.length === size) {
                    finalArr.push([num]);
                }
                else {
                    last.push(num);
                }
            }
            return finalArr;
            // version two
            var count = 0;
            while (count < arr.length) {
                finalArr.push(arr.slice(count, count + size));
                count += size;
            }
            console.log({ finalArr: finalArr });
            return finalArr;
        })([1, 2, 3, 4, 5], 3);
    }
}
//------------------------------------------------
/**
 * [STRING]
 *
 * */
{
    /**
     * longest_substring ✅
     *
     * */
    {
        (function (s) {
            var s_array = s.split("");
            var count = 0;
            // @ts-ignore
            var map_count = new Set();
            for (var index = 0; index < s_array.length; index++) {
                var currentLetter = s_array[index];
                if (map_count.has(currentLetter)) {
                    map_count.clear();
                    map_count.add(currentLetter);
                }
                else {
                    map_count.add(currentLetter);
                    count = Math.max(map_count.size, count);
                }
            }
            return count;
        })("abcabcbb");
        // ("dvdf")
        // ("abba")
    }
    /**
     * [844] backspace string compare ✅
     *
     * *****/
    {
        (function (s, l) {
            var sPointer = 0;
            var rPointer = 0;
            var newS = [];
            var newL = [];
            while (sPointer < s.length || rPointer < l.length) {
                if (s[sPointer] === "#") {
                    newS.pop();
                }
                else {
                    if (s[sPointer])
                        newS.push(s[sPointer]);
                }
                if (l[rPointer] === "#") {
                    newL.pop();
                }
                else {
                    if (l[rPointer])
                        newL.push(l[rPointer]);
                }
                sPointer++;
                rPointer++;
            }
            return newS !== newL;
        })("a#c", "b");
    }
    /**
     * [344] String reverse ✅
     *
     * *****/
    {
        (function (str) {
            var e_1, _a;
            // version one
            var reversed = '';
            try {
                for (var str_1 = __values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
                    var char = str_1_1.value;
                    reversed = char + reversed;
                    console.info({ reversed: reversed });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // version two
            str.split("").reduce(function (rev, char) { return char + rev; }, '');
            // version three
            return str.split('').reverse().join('');
        })("reverse");
    }
    /**
     * Roman Integer ✅
     *
     * *****/
    {
        var rmMap_1 = new Map();
        rmMap_1.set("I", 1);
        rmMap_1.set("V", 5);
        rmMap_1.set("X", 10);
        rmMap_1.set("L", 50);
        rmMap_1.set("C", 100);
        rmMap_1.set("D", 500);
        rmMap_1.set("M", 1000);
        var minusOne_1 = ["V", "X"];
        var minusTen_1 = ["L", "C"];
        var minusHundo_1 = ["D", "M"];
        (function roman_to_int(s) {
            if (s.length > 15)
                return 0;
            // create map of conversion
            var finalNum = 0;
            // break string input into array to iterate over
            var sArr = Array.from(String(s));
            // Or
            var sArr1 = __spreadArray([], __read(s.split("")), false);
            for (var i = 0; i < sArr.length; i++) {
                var rn = sArr[i];
                var nextNumeral = sArr[i + 1];
                if (rn === "I" && minusOne_1.includes(nextNumeral)) {
                    finalNum += -1;
                    finalNum += rmMap_1.get(nextNumeral);
                    i++;
                }
                else if (rn === "X" && minusTen_1.includes(nextNumeral)) {
                    finalNum += -10;
                    finalNum += rmMap_1.get(nextNumeral);
                    i++;
                }
                else if (rn === "C" && minusHundo_1.includes(nextNumeral)) {
                    finalNum += -100;
                    finalNum += rmMap_1.get(nextNumeral);
                    i++;
                }
                else {
                    finalNum += rmMap_1.get(rn);
                }
            }
            return finalNum;
        })("MCMXCIV");
    }
    /**
     * [242] Valid Anagram ✅
     *
     * *****/
    {
        (function (s, t) {
            // sort each str
            var sS = s.replace("/[^\w]/g", "").split('').sort().join("").toLowerCase();
            var tS = t.replace("/[^\w]/g", "").split("").sort().join("").toLowerCase();
            if (tS.length != sS.length) {
                console.assert(sS.length == tS.length, "They do Not equal ");
                return false;
            }
            if (tS.indexOf(sS) != 0) {
                console.assert(tS.indexOf(sS), "letter don't equal");
                return false;
            }
            console.log({ sS: sS, tS: tS });
            return true;
        })("anagram", "car");
        (function (s, t) {
            if (!s || !t)
                return false;
            return __spreadArray([], __read(s), false).sort().join("").replace("/[^\w]/g", "").toLowerCase() === __spreadArray([], __read(t), false).sort().join("").replace("/[^\w]/g", "").toLowerCase();
        })("anagram", "nagaram");
    }
    /**
     *
     * [09] Palindrome number
     *
     **/
    {
        (function is_palindrome(x) {
            // turn number into array
            var xS1 = "" + x;
            var arr = __spreadArray([], __read(xS1.split("")), false);
            var xS2 = Array.from(String(x));
            var xN2 = Array.from(String(x), Number);
            // let numArr = [...x];
            // if (x < 2) return false;
            var _a = __read([0, arr.length - 1], 2), lp = _a[0], rp = _a[1];
            while (lp <= rp) {
                if (arr[lp] != arr[rp])
                    return false;
                lp++;
                rp--;
            }
            return true;
        })(151);
    }
    /**
     *
     * [58] Length of last word
     *
     **/
    {
        (function lengthOfLastWord(s) {
            var arr = s.split(" ").filter(function (v) { return v; });
            var l = arr[arr.length - 1].length;
            return l;
        })(" fly me to the moon ");
    }
    /**
     *
     *  Valid Palindrome string
     *
     **/
    {
        (function is_palindrome1(str) {
            // turn number into array
            return str.split("").every(function (c, i) {
                return c === str.charAt(str.length - i - 1);
            });
        })("abba");
        (function is_palindrome2(str) {
            // turn number into array
            var rStr = str.split("").reverse().join("");
            return str === rStr;
        })("abba");
    }
    /**
     * Reverse int
     */
    {
        (function (n) {
            var p = n.toString().split('').reverse().join('');
            return parseInt(p) * Math.sign(n);
        })(-51);
    }
    /**
     * FizzBuzz
     */
    {
        (void function fizzBuzz(n) {
            var count = 1;
            while (count <= n) {
                var fizz = count % 3 == 0 ? "fizz" : "";
                var buzz = count % 5 == 0 ? "buzz" : "";
                console.log("".concat(count, " :::: ").concat(fizz).concat(buzz));
                count++;
            }
        }(20));
        // fizzBuzz(5)
        // fizzBuzz(5)}
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
        var parens1_1 = {
            "(": ")",
            "[": "]",
            "{": "}",
        };
        (function (s) {
            if (s.length === 0)
                return true;
            var stack = [];
            var pointer = 0;
            while (pointer < s.length) {
                if (parens1_1.hasOwnProperty(s[pointer])) {
                    stack.push(s[pointer]);
                }
                else {
                    var current = s[pointer];
                    var match = stack.pop();
                    // console.log(parens1[match!] === current);
                    return parens1_1[match] === current;
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
    var TreeNode_1 = /** @class */ (function () {
        function TreeNode(val, left, right) {
            this.val = val === undefined ? 0 : val;
            this.left = left === undefined ? null : left;
            this.right = right === undefined ? null : right;
        }
        TreeNode.prototype.insert = function (values) {
            var e_2, _a;
            var queue = [this];
            var i = 0;
            while (queue.length > 0) {
                var current = queue.shift();
                try {
                    for (var _b = (e_2 = void 0, __values(["left", "right"])), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var side = _c.value;
                        if (!current[side]) {
                            if (values[i] !== null) {
                                current[side] = new TreeNode(values[i]);
                            }
                            i++;
                            if (i >= values.length)
                                return this;
                        }
                        if (current[side])
                            queue.push(current[side]);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            return this;
        };
        return TreeNode;
    }());
    var rootNode_1 = new TreeNode_1(3, new TreeNode_1(20, new TreeNode_1(15), new TreeNode_1(7)), new TreeNode_1(9));
    var otherNode = new TreeNode_1(3, new TreeNode_1(6, new TreeNode_1(9, null, new TreeNode_1(5, new TreeNode_1(8), null)), new TreeNode_1(2, null, null)), new TreeNode_1(1, null, new TreeNode_1(4, null, null)));
    /*
         In-Order                 Pre-Order                Post-Order
          [2] 1                   [1]  1                    [3] 1
      
        [1]3   4 [3]          [2] 3     4 [3          [1] 3     4 [2]
    */
    {
        /**
         * Depth First Search in-order traversal
         *
         */
        {
            var traverse_1 = function (root, stack) {
                if (root) {
                    traverse_1(root.left, stack);
                    stack.push(root.val);
                    traverse_1(root.right, stack);
                }
                return stack;
            };
            (function (root) { return traverse_1(root, []); })(rootNode_1);
        }
        /**
         * Depth first Search pre-order traversal
         *
         */
        {
            var preorderTraversal = function (root) { return traverse_2(root, []); };
            var traverse_2 = function (root, stack) {
                if (root) {
                    stack.push(root.val);
                    traverse_2(root.left, stack);
                    traverse_2(root.right, stack);
                }
                return stack;
            };
        }
        /**
         * Depth first Search post-order traversal
         *
         * *****/
        {
            var traverse_3 = function (root, stack) {
                if (root) {
                    traverse_3(root.left, stack);
                    traverse_3(root.right, stack);
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
            (function depth_of_tree(root) {
                function recursiveFunction(node, count) {
                    if (!node)
                        return count;
                    return Math.max(recursiveFunction(node.left, count + 1), recursiveFunction(node.right, count + 1));
                }
                return recursiveFunction(rootNode_1, 0);
            })(rootNode_1);
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
            (function (root) {
                if (!root)
                    return [];
                var result = [];
                var queue = [root];
                while (queue.length) {
                    var length_1 = queue.length;
                    var count = 0;
                    var subArray = [];
                    while (count < length_1) {
                        var node = queue.shift();
                        if (node) {
                            if (node.val)
                                subArray.push(node.val);
                            if (node.left)
                                queue.push(node.left);
                            if (node.right)
                                queue.push(node.right);
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
            (function depth_of_tree(root) {
                var maxDepth = [];
                var level = 0;
                function recursiveFunction(node, results, level) {
                    if (!node)
                        return results;
                    if (results[level]) {
                        results[level].push(node.val);
                    }
                    else {
                        var temp = [node.val];
                        results[level] = temp;
                    }
                    if (node.left)
                        recursiveFunction(node.left, results, level + 1);
                    if (node.right)
                        recursiveFunction(node.right, results, level + 1);
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
            var dfs_1 = function (node, level, result) {
                if (!node)
                    return;
                if (level >= result.length)
                    result.push(node.val);
                if (node.right)
                    dfs_1(node.right, level + 1, result);
                if (node.left)
                    dfs_1(node.left, level + 1, result);
                return result;
            };
            (function (root) {
                var res = [];
                dfs_1(root, 1, res);
                return res;
            })(otherNode);
            function right_tree_side(root) {
                var queue = [root];
                var finalArray = [];
                while (queue.length) {
                    var length_2 = queue.length;
                    var count = 0;
                    var subArray = [];
                    while (count < length_2) {
                        var current = queue.shift();
                        if (current) {
                            queue.push(current.right, current.left);
                            subArray.push(current.val);
                        }
                        count++;
                    }
                    finalArray.push(subArray);
                }
                return finalArray;
            }
            right_tree_side(otherNode);
        }
        /**
         * binary tree count the nodes 0(n) ✅
         *
         * *****/
        {
            function countNodesAgain(root) {
                if (root === null)
                    return 0;
                return countNodesAgain(root.left) + countNodesAgain(root.left) + 1;
            }
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
    var TreeNode_2 = /** @class */ (function () {
        function TreeNode(val, left, right) {
            this.val = val === undefined ? 0 : val;
            this.left = left === undefined ? null : left;
            this.right = right === undefined ? null : right;
        }
        TreeNode.prototype.insert = function (values) {
            var e_3, _a;
            var queue = [this];
            var i = 0;
            while (queue.length > 0) {
                var current = queue.shift();
                try {
                    for (var _b = (e_3 = void 0, __values(["left", "right"])), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var side = _c.value;
                        if (!current[side]) {
                            if (values[i] !== null) {
                                current[side] = new TreeNode(values[i]);
                            }
                            i++;
                            if (i >= values.length)
                                return this;
                        }
                        if (current[side])
                            queue.push(current[side]);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            return this;
        };
        return TreeNode;
    }());
    var rootNode = new TreeNode_2(3, new TreeNode_2(20, new TreeNode_2(15), new TreeNode_2(7)), new TreeNode_2(9));
    var otherNode = new TreeNode_2(3, new TreeNode_2(6, new TreeNode_2(9, null, new TreeNode_2(5, new TreeNode_2(8), null)), new TreeNode_2(2, null, null)), new TreeNode_2(1, null, new TreeNode_2(4, null, null)));
    /**
     * binary search count the nodes 0(log n) ✅
     *
     * **/
    {
        function getHeight(node, count) {
            if (!node)
                return count;
            return Math.max(getHeight(node.left, count + 1));
        }
        function nodeExists(mid, height, root) {
            var _a = __read([0, Math.pow(2, height) - 1, 0], 3), left = _a[0], right = _a[1], localHeight = _a[2];
            while (localHeight < height) {
                var middle = Math.ceil((left + right) / 2);
                if (mid >= middle) {
                    root = root.right;
                    left = middle; // inclusive
                }
                else {
                    root = root.left;
                    right = middle - 1;
                }
                localHeight++;
            }
            return root !== null;
        }
        var countNodes = function (root) {
            if (!root)
                return 0;
            var height = getHeight(root, 0);
            if (height === 0)
                return 1;
            var upperCount = Math.pow(2, height) - 1;
            var _a = __read([0, upperCount], 2), left = _a[0], right = _a[1];
            while (left < right) {
                var mid = Math.ceil((left + right) / 2);
                if (nodeExists(mid, height, root)) {
                    left = mid;
                }
                else {
                    right = mid - 1;
                }
            }
            return upperCount + left + 1;
        };
        (function (root) {
            if (!root) {
                return;
            }
            var height = getHeight(root, 0);
            if (height === 0)
                return 1;
            var upperPart = Math.pow(2, height) - 1;
            var left = 0;
            var right = upperPart;
            while (left < right) {
                var mid = Math.ceil((left + right) / 2);
                if (nodeExists(mid, height, root)) {
                    left = mid;
                }
                else {
                    right = mid - 1;
                }
            }
            return upperPart + left + 1;
        })(otherNode);
    }
    /**
     * 1st and last position of target O(log n) ✅
     *
     * *****/
    {
        var binSearch_1 = function (array, left, right, target) {
            while (left <= right) {
                var mid = Math.floor((left + right) / 2);
                var midValue = array[mid];
                if (midValue === target) {
                    return mid;
                }
                else if (midValue < target) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
            return -1;
        };
        function firstAndLastPositionOfTarget(nums, target) {
            if (nums.length === 0)
                return [-1, -1];
            var first_position = binSearch_1(nums, 0, nums.length - 1, target);
            if (first_position === -1)
                return [-1, -1];
            var start_position = first_position, end_position = first_position, temp_pos_1, temp_pos_2;
            while (start_position !== -1) {
                temp_pos_1 = start_position;
                start_position = binSearch_1(nums, 0, start_position - 1, target);
            }
            start_position = temp_pos_1;
            while (end_position !== -1) {
                temp_pos_2 = end_position;
                end_position = binSearch_1(nums, end_position + 1, nums.length - 1, target);
            }
            end_position = temp_pos_2;
            return [start_position, end_position];
        }
        var otherBinary = function (nums, target) {
            var s = 0;
            var e = nums.length;
            var m;
            while (s <= e) {
                m = Math.floor((s + e) / 2);
                if (nums[m] >= target) {
                    e = m - 1;
                }
                else {
                    s = m + 1;
                }
            }
            if (nums[s] !== target)
                return [-1, -1];
            var tmpS = s;
            e = nums.length - 1;
            while (s <= e) {
                m = Math.floor((s + e) / 2);
                if (nums[m] <= target) {
                    s = m + 1;
                }
                else {
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
        (function (arr, num) {
            // find the partition
            var left = 0;
            var right = arr.length - 1;
            var indexToFind = arr.length - num;
            quickSort(arr, 0, arr.length - 1);
            function quickSort(items, left, right) {
                while (left < right) {
                    function partition(items, start, end) {
                        var pivot = items[right];
                        var finalIndexPosition = start;
                        var positionTracker = start;
                        while (positionTracker < right) {
                            if (items[finalIndexPosition] < pivot) {
                                swap(items, positionTracker, finalIndexPosition);
                                finalIndexPosition++;
                            }
                            positionTracker++;
                        }
                        swap(arr, finalIndexPosition, end);
                        return finalIndexPosition;
                    }
                    function swap(array, j, i) {
                        var temp = array[j];
                        array[j] = array[i];
                        array[i] = temp;
                    }
                    var position = partition(arr, left, right);
                    quickSort(items, left, position - 1);
                    quickSort(items, position + 1, right);
                }
            }
            return arr[indexToFind];
        })([5, 2, 3, 1, 2, 4, 5, 6, 3], 4);
        var swap_1 = function (array, j, i) {
            var temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        };
        var partition_1 = function (items, left, right) {
            var pivot = items[Math.floor((right + left) / 2)], //middle element
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
                    swap_1(items, i, j); //swap two elements
                    i++;
                    j--;
                }
            }
            return i;
        };
        var quickSort_1 = function (array, left, right) {
            if (left < right) {
                var partitionIndex = partition_1(array, left, right);
                quickSort_1(array, left, partitionIndex - 1);
                quickSort_1(array, partitionIndex + 1, right);
            }
        };
        var quickSelect_1 = function (array, left, right, idxToFind) {
            if (left < right) {
                var partitionIdx = partition_1(array, left, right);
                if (partitionIdx === idxToFind) {
                    return array[partitionIdx];
                }
                else if (idxToFind < partitionIdx) {
                    return quickSelect_1(array, left, partitionIdx - 1, idxToFind);
                }
                else {
                    return quickSelect_1(array, partitionIdx + 1, right, idxToFind);
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
    var linkedList = [4, 3, 2, 0, 0, 0].reduce(function (acc, val) { return new ListNode_1(val, acc); }, null);
    // const l2: ListNode = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc as undefined) as any, null);
    var l2 = [6, 5, 4].reduce(function (acc, val) { return new ListNode_1(val, acc); }, null);
    // @ts-ignore
    var flattenLinkedList = function (head) {
        if (!head)
            return head;
        var currentNode = head;
        while (head) {
            if (currentNode.child === null) {
                // if node doesn't have children keep it moving:
                if (currentNode.next != null)
                    currentNode = currentNode.next;
            }
            else {
                var lastChildNode = currentNode.child; // make child node a variable.
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
    var ListNode_1 = /** @class */ (function () {
        function ListNode(val, next) {
            this.val = val === undefined ? 0 : val;
            this.next = next === undefined ? null : next;
        }
        return ListNode;
    }());
    var _a = __read([
        new ListNode_1(1),
        new ListNode_1(2),
        new ListNode_1(3),
        new ListNode_1(4),
        new ListNode_1(5),
    ], 5), node1 = _a[0], node2 = _a[1], node3 = _a[2], node4 = _a[3], node5 = _a[4];
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
        function reverseList(head) {
            var prev = null; // What we checked
            var current = head; // We are checking this
            var tempNext; // To be checked
            while (current) {
                tempNext = current.next; // Store the node "current" is pointing to.
                current.next = prev; // Make "current" point to the previous node.
                prev = current; // Save the current node in "prev" for the next loop.
                current = tempNext; // Set "current" to be current's old next node for the next loop.
            }
            return prev; // Return what we checked
        }
        console.log(reverseList(node1));
    }
    /**
     * add Two numbers ✅
     *
     * */
    {
        // @ts-ignore
        function addTwoNumbers(l1, l2) {
            var p1 = l1, p2 = l2;
            var carryOver = 0;
            while (p1 || p2) {
                var val = 0;
                var val2 = 0;
                if (p1) {
                    val = p1.val;
                    p1 = p1.next;
                }
                if (p2) {
                    val2 = p2.val;
                    p2 = p2.next;
                }
                var sum = val + val2 + carryOver;
                // if (sum > 9) {
                //   carryOver = 1;
                // } else {carryOver = 0}
                var n = new String("pAEBle");
                n.substring(0, 3);
                carryOver = Math.floor(sum / 10);
                var digit = sum % 10;
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
        }
        ;
        addTwoNumbers(l2, node3);
    }
}
