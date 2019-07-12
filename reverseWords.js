// Good morning! Here's your coding interview problem for today.
// This problem was asked by Google.
// Given a string of words delimited by spaces, reverse the words in string.
// For example, given "hello world here", return "here world hello"
// Follow-up: given a mutable string representation,
// can you perform this operation in-place?

const str = "hello world here";

function reverseStr(str, reversed = []) {
  if (str.length) {
    const poped = str.shift();
    return reverseStr(str, [poped, ...reversed]);
  }

  return reversed.join(" ");
}

console.log(reverseStr(str.split(" ")));
