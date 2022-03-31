function backspaceCompare1(s: string, t: string): boolean {
  if (!s && !t) {
    return true;
  }
  if ((!s && t) || (!t && s)) {
    return false;
  }

  const goThroughIt = (string: string) => {
    const localArray = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "#") {
        localArray.pop();
        continue;
      }
      localArray.push(string[i]);
    }
    // console.log(localArray);
    return localArray;
  };


  return goThroughIt(s).toString() === goThroughIt(t).toString();
}
console.log(backspaceCompare1("ab##", "c#d#"));
console.log(backspaceCompare1("ab#c", "ad#c"));
console.log(backspaceCompare1("a##c", "#a#c"));
console.log(backspaceCompare1("a#c", "b"));

const backSpaceCompare2 = (s: string, t: string): boolean => {
  let [pointerS, pointerT] = [s.length - 1, t.length - 1];

  while (pointerS >= 0 || pointerT >= 0) {
    if (t[pointerT] === "#") {
      let stepsT = 2;

      while (stepsT > 0) {
        pointerT--;
        stepsT--;
        if (t[pointerT] === "#") {
          stepsT += 2;
        }
      }
    }

    if (s[pointerS] === "#") {
      let stepsS = 2;

      while (stepsS > 0) {
        pointerS--;
        stepsS--;
        if (s[pointerS] === "#") {
          stepsS += 2;
          // pointerS--;
          // stepsS--;
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
console.log(backSpaceCompare2("ab##", "c#d#"));
console.log(backSpaceCompare2("ab#c", "ad#c"));
console.log(backSpaceCompare2("a##c", "#a#c"));
console.log(backSpaceCompare2("a#c", "b"));

function back_space_compare(s1: string, s2: string): boolean {
  let recurse = (counter: number, pointer: number, strng: string) => {
    while (counter > 0) {
      counter--;
      pointer--;

      if (strng[pointer] === "#") {
        counter += 2;
      }
    }
    return pointer;
  };
  for (
      let [s1p, s2p] = [s2.length - 1, s1.length - 1];
      s1p > 0 && s2p > 0;
      s1p-- && s2p--
  ) {

    if (s1[s1p] === "#") {
      let count1 = 2;

      s1p = recurse(count1, s1p, s1);
    }

    if (s2[s2p] === "#") {
      let steps = 2;

      s2p = recurse(steps, s2p, s2);
    }

    if (s2[s2p] != s1[s1p]) {
      return false;
    }
  }
  return true;
}
console.log(back_space_compare("ab##", "c#d#"));
console.log(back_space_compare("ab#c", "ad#c"));
console.log(back_space_compare("a##c", "#a#c"));
console.log(back_space_compare("a#c", "b"));