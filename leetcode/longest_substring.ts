function lengthOfLongestSubstring99(s: string): number {
  if (s.length <= 1) {
    return s.length;
  }

  let pointer = 0,
    tempPointer = 0,
    maxSubString = 0,
    subArray = [];
  while (pointer < s.length) {
    // let map = new Map();

    if (subArray.includes(s[pointer])) {
      // if (map.has(s[pointer])) {
      subArray.length > maxSubString
        ? (maxSubString = subArray.length)
        : (subArray = [s[pointer]]);
    } else {
      // map.set(s[pointer], pointer);
      subArray.push(s[pointer]);
      subArray.length > maxSubString ? (maxSubString = subArray.length) : null;
    }

    pointer++;
  }

  for (let left = 0; left < s.length; left++) {
    let map = new Map();
    let currentLength = 0;
    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if (!map[currentChar]) {
        currentLength++;
        map[currentChar] = true;
        maxSubString = Math.max(maxSubString, currentLength);
      } else {
        break;
      }
    }
  }

  return maxSubString;
}

// console.log(lengthOfLongestSubstring1("dvdf"));

function lengthOfLongestSubstring2(s: string): number {
  let left = 0;
  let longestSubString = 0;
  const seenChars = {};

  for (let right = 0; right < s.length; right++) {
    const leftChar = s[left];
    const currentChar = s[right];
    const prevCharPosition = seenChars[currentChar];

    if (prevCharPosition >= left) {
      left = prevCharPosition + 1;
    }
    seenChars[currentChar] = right;
    longestSubString = Math.max(longestSubString, right - left + 1);
  }

  return longestSubString;
}

// console.log(lengthOfLongestSubstring2("dvdf"));
// console.log(lengthOfLongestSubstring2("abcabcbb"));

function lengthOfLongestSubstring1(s) {
  const map = {};
  var left = 0;

  return s.split("").reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
}

function lengthOfLongestSubstring4(s: string): number {
  const substring = new Set<string>();
  let max = 0;

  for (const char of s) {
    // Shrink window by removing left-most value
    while (substring.has(char)) {
      substring.delete(substring.values().next().value);
    }

    substring.add(char);
    max = Math.max(max, substring.size);
  }

  return max;
}

console.log(lengthOfLongestSubstring4("abcabcbb"));
