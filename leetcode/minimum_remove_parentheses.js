function minRemoveToMakeValid1(s) {
    var p = 0;
    var sPointer = 0;
    var closeCount = 0;
    var openCount = 0;
    var res = s.split("");
    var stack = [];
    while (p < res.length) {
        var currentChar = s[p];
        if (currentChar === "(")
            stack.push(p);
        else if (currentChar === ")" && stack.length)
            stack.pop();
        else if (currentChar === ")")
            res[p] = "";
        p++;
    }
    console.log(stack.join(""));
    return "";
}
;
console.log(minRemoveToMakeValid1("lee(t(c)o)de)"));
var minRemoveToMakeValid2 = function (s) {
    var stack = [];
    var arr = s.split("");
    for (var currentIndex = 0; currentIndex < s.length; currentIndex++) {
        if (s[currentIndex] === '(') {
            stack.push(currentIndex);
        }
        if (s[currentIndex] === ')' && stack.length > 0) {
            stack.pop();
        }
        else {
            arr[currentIndex] = "";
        }
    }
    while (stack.length) {
        arr[stack.pop()] = "";
    }
    return arr.join("");
    var res = s.split("");
    // const stack = [];
    for (var i = 0; i < res.length; i++) {
        if (res[i] === '(') {
            stack.push(i);
        }
        else if (res[i] === ')' && stack.length) { // keeps track of the matching open bracket
            stack.pop();
        }
        else if (res[i] === ')') {
            res[i] = "";
        }
    }
    while (stack.length) {
        var currentIndex = stack.pop();
        res[currentIndex] = "";
    }
    return stack.join("");
};
console.log(minRemoveToMakeValid2("lee(t(c)o)de)"));
// loop through string
// if i find a open parentheses
// save location to array
// if i find a closed parentheses
// check if array has value
// pop matching parenthesis
// remove from string if any don't match
// if there are any extra open parenthesis set them to empty
