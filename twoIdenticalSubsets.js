// Good morning! Here's your coding interview problem for today.
// This problem was asked by Facebook.
// Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.
// For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true, since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.
// Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two subsets that add up to the same sum.

// the idea is to find the 1/2 of the sum of the array and then with sorted array b > a
// you start to look for items which can fit into the pattern from biggest to smallest
// each iteretion you remember the sum and see if the next item can fit there.

const set = [15, 5, 20, 10, 35, 10, 5, 10];

function twoIdenticalSubsets(set) {
  const setSum = set.reduce((a, b) => a + b);
  const sortedSet = set.sort((a, b) => a < b);
  const eachSubsetSum = setSum / 2;
  const sub_1 = [];
  const sub_2 = [];
  let subSetSum = 0;

  // if the sum cant be divided by 2
  // simply return because it can't be solved
  if (setSum % 2 !== 0) {
    return [];
  }

  for (let i = 0; i < sortedSet.length; i++) {
    const currentItem = sortedSet[i];
    const nextItem = sortedSet[i + 1];

    if (i === 0) {
      // if its first iteretion push the first and second element into the first subset array
      sub_1.push(currentItem, nextItem);
      // add the sum of the first and the second element in the array
      subSetSum = currentItem + nextItem;
      if (subSetSum === eachSubsetSum) {
        // if the first and the second items are equel to {eachSubsetSum}
        // then we done and can return both arrays
        return { sub_1, sub_2: sortedSet.slice(2) };
      }
    } else {
      // checking if the next value and sum smaller or equel to to {eachSubsetSum}
      if (subSetSum + nextItem <= eachSubsetSum) {
        sub_1.push(nextItem);

        // adding sum to total
        subSetSum += nextItem;
      } else {
        // if the nextItem and the total sum larger then the {eachSubsetSum} push it to the other array
        sub_2.push(nextItem);
      }

      if (subSetSum === eachSubsetSum) {
        return { sub_1, sub_2 };
      }
    }
  }
  // if we went through all of our options and there is no solution
  // return an empty array
  return [];
}

console.log(twoIdenticalSubsets(set));
