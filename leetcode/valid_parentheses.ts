const parens1 = {
  '(': ')',
  '[': ']',
  '{': '}'
}

function isValid1(s: string): boolean {
  if (s.length === 0) return true

  const stack = [];

  for (let i = 0; i < s.length; i++){
    if (parens1[s[i]]){
      stack.push(s[i])
    } else {
      const leftBracket = stack.pop();
      const matchingBracket = parens1[leftBracket];
      if ( s[i] !== matchingBracket ) return false
    }
  }

  return stack.length === 0
}

console.log(isValid1("()[]{}"));