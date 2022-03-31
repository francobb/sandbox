function minRemoveToMakeValid1(s: string): string {
  let p = 0;
  let sPointer=0;
  let closeCount=0;
  let openCount=0;

  let res = s.split("")
  const stack = [];

  while (p < res.length){
    let currentChar = s[p]

    if (currentChar === "(") stack.push(p)

    else if (currentChar === ")" && stack.length) stack.pop()

    else if (currentChar === ")") res[p] = ""

    p++
  }

  console.log(stack.join(""));
  return "";
};

console.log(minRemoveToMakeValid1("lee(t(c)o)de)"));

const minRemoveToMakeValid2 = (s: string): string => {

  let stack = [];
  let arr = s.split("");

  for (let currentIndex = 0; currentIndex<s.length; currentIndex++) {
    if (s[currentIndex] === '('){
      stack.push(currentIndex);
    }

    if (s[currentIndex] === ')' && stack.length > 0) {
      stack.pop()
    } else {
      arr[currentIndex] = ""
    }
  }

  while (stack.length){
    arr[stack.pop()] = "";
  }

  return arr.join("");


  const res = s.split("");
  // const stack = [];

  for (let i = 0; i < res.length; i++){
    if (res[i] === '('){
      stack.push(i)
    } else if(res[i] === ')' && stack.length) { // keeps track of the matching open bracket
      stack.pop();
    } else if(res[i] === ')'){
      res[i] = ""
    }
  }

  while (stack.length) {
    const currentIndex = stack.pop();
    res[currentIndex] = ""
  }

  return stack.join("")
}

console.log(minRemoveToMakeValid2("lee(t(c)o)de)"));


// loop through string

// if i find a open parentheses
  // save location to array
// if i find a closed parentheses
    // check if array has value
        // pop matching parenthesis
        // remove from string if any don't match
// if there are any extra open parenthesis set them to empty