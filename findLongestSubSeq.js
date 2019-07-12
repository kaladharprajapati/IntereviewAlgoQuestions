// Good morning! Here's your coding interview problem for today.
// This problem was asked by Microsoft.
// Given an array of numbers, find the length of the longest increasing subsequence in the array.
// The subsequence does not necessarily have to be contiguous.
// For example, given the array
// [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15],
// the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.

const arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
let result = {};

function longestSubSeq(arr, holder = []) {
  if (arr.length <= 1) {
    if (!result[holder.length]) {
      result[holder.length] = [holder];
    } else {
      result[holder.length].push(holder);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (holder[holder.length - 1] < arr[i] || !holder.length) {
        longestSubSeq(arr.slice(i), [...holder, arr[i]]);
      }
    }
  }
}
longestSubSeq(arr);
console.log(result);
