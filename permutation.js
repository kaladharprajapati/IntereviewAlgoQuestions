// Givven a String, create all possible strings from it
// for example string = "abc" => ["abc", "bac", "bca", "cba", "cab", "acb"]

const str = "abcdcv";

function permutation(str) {
  const results = [];
  const startingPoint = str;
  let start = false;
  let i = 0;
  let strArr = str.split("");

  while (true) {
    if (start && strArr.join("") === startingPoint) {
      break;
    }

    start = true;
    const temp = strArr[i];
    strArr[i] = strArr[i + 1];
    strArr[i + 1] = temp;
    strArr = strArr.join("");
    results.push(strArr);
    strArr = strArr.split("");
    i++;

    if (i === str.length - 1) {
      i = 0;
    }
  }

  return results;
}

console.log(permutation(str));
