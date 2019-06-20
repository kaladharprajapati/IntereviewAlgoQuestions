const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// O(n)
function isStringUniqe(str) {
  const holder = {};
  for (let idx = 0; idx < str.length; idx++) {
    if (holder[str[idx]]) {
      return false;
    }
    holder[str[idx]] = true;
  }

  return true;
}

// O(n^2)
function isStringUniqe2(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const element = str[j];
      if (str[i] === element) {
        return false;
      }
    }
  }

  return true;
}

console.log(isStringUniqe(str));
console.log(isStringUniqe2(str));
