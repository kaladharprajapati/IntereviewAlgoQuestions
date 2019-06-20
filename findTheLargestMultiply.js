const arr = [2, 3, 4, -1, -3, -4];

function findLargestMultiply(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  // taking the two smallest values product,
  // and multipy it with the largest product
  const firstScenario =
    sortedArr[0] * sortedArr[1] * sortedArr[sortedArr.length - 1];

  // taking the biggest values product
  const secondScenario =
    sortedArr[sortedArr.length - 1] *
    sortedArr[sortedArr.length - 2] *
    sortedArr[sortedArr.length - 3];

  return Math.max(firstScenario, secondScenario);
}

console.log(findLargestMultiply(arr));
