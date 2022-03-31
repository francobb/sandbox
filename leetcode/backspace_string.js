function backspaceCompare1(s, t) {
    if (!s && !t) {
        return true;
    }
    if ((!s && t) || (!t && s)) {
        return false;
    }
    var goThroughIt = function (string) {
        var localArray = [];
        for (var i = 0; i < string.length; i++) {
            if (string[i] === "#") {
                localArray.pop();
                continue;
            }
            localArray.push(string[i]);
        }
        // console.log(localArray);
        return localArray;
    };
    var sArray = goThroughIt(s);
    var tArray = goThroughIt(t);
    return goThroughIt(s).toString() === goThroughIt(t).toString();
}
// console.log(backspaceCompare1("ab##", "c#d#"));
// console.log(backspaceCompare1("ab#c", "ad#c"));
// console.log(backspaceCompare1("a##c", "#a#c"));
console.log(backspaceCompare1("a#c", "b"));
var backSpaceCompare2 = function (s, t) {
    var pointerS = s.length - 1, pointerT = t.length - 1;
    var stepsS = 0, stepsT = 0;
    while (pointerS >= 0 || pointerT >= 0) {
        if (s[pointerS] === "#" || t[pointerT] === "#") {
            if (t[pointerT] === "#") {
                var stepsT_1 = 2;
                while (stepsT_1 > 0) {
                    pointerT--;
                    stepsT_1--;
                    if (t[pointerT] === "#") {
                        stepsT_1 += 2;
                        // pointerT--;
                        // stepsT--;
                    }
                }
            }
            if (s[pointerS] === "#") {
                var stepsS_1 = 2;
                while (stepsS_1 > 0) {
                    pointerS--;
                    stepsS_1--;
                    if (s[pointerS] === "#") {
                        stepsS_1 += 2;
                        // pointerS--;
                        // stepsS--;
                    }
                }
            }
        }
        if (s[pointerS] !== t[pointerT]) {
            return false;
        }
        else {
            pointerT--;
            pointerS--;
        }
    }
    return true;
};
// console.log(backSpaceCompare2("ab##", "c#d#"));
// console.log(backSpaceCompare2("ab#c", "ad#c"));
// console.log(backSpaceCompare2("a##c", "#a#c"));
console.log(backSpaceCompare2("a#c", "b"));
