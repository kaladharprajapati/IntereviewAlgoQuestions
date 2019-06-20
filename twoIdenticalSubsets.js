// Good morning! Here's your coding interview problem for today.
// This problem was asked by Facebook.
// Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.
// For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true, since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.
// Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two subsets that add up to the same sum.

// the idea is to find the 1/2 of the sum of the array and then with sorted array b > a
// you start to look for items which can fit into the pattern from biggest to smallest
// each iteration you remember the sum and see if the next item can fit there.

const set = [15, 5, 20, 10, 35, 15, 10];

function twoIdenticalSubsets(set) {
  const setSum = set.reduce((a, b) => a + b);
  const sortedSet = set.sort((a, b) => b - a);
  const eachSubsetSum = setSum / 2;
  const sub_1 = [];

  let soFar = 0;
  let i = 0;

  if (setSum % 2 !== 0) {
    return null;
  }

  while (soFar < eachSubsetSum) {
    if (sortedSet[i] + soFar === eachSubsetSum) {
      sub_1.unshift(sortedSet[i]);
      return {
        sub_1,
        sub_2: sortedSet.filter(i => !sub_1.includes(i))
      };
    }

    if (sortedSet[i] + soFar < eachSubsetSum) {
      soFar += sortedSet[i];
      soFar;
      sub_1.unshift(sortedSet[i]);
    } else {
      soFar += sortedSet[i];
    }

    if (i === sortedSet.length - 1) {
      return null;
    }
    i++;
  }
}

console.log(twoIdenticalSubsets(set));
