const arr = [2, 3, 4, -1, -3, -4]

function findLargestMultiply(arr) {
  console.time("a")
  const sortedArr = arr.sort((a, b) => a - b); /*?*/
  const ans = Math.max(a[0] * sortedArr[1] * sortedArr[sortedArr.length - 1], sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2] * sortedArr[sortedArr.length - 3]);
  console.timeEnd("a")
  return ans
}


console.log(findLargestMultiply(arr));