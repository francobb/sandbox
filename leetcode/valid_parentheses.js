var parens1 = {
    '(': ')',
    '[': ']',
    '{': '}'
};
function isValid1(s) {
    if (s.length === 0)
        return true;
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (parens1[s[i]]) {
            stack.push(s[i]);
        }
        else {
            var leftBracket = stack.pop();
            var matchingBracket = parens1[leftBracket];
            if (s[i] !== matchingBracket)
                return false;
        }
    }
    return stack.length === 0;
}
console.log(isValid1("()[]{}"));
