const str = "abc";

function permutation(str, permute = [], opts = []) {
  if (!str.length) {
    return opts.push(permute.join(""));
  }

  for (let idx = 0; idx < str.length; idx++) {
    const current = str.shift();
    permutation(str, [...permute, current], opts);
    str.push(current);
  }

  return opts;
}

console.log(permutation([...str]));
console.log(str);
