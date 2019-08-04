const arr = [2,3,1,6,4,3,7,12,0,34,1];

function sortBoth(arrA, arrB) {
  const sorted = [];

  while (arrA.length && arrB.length) {
    arrA[0] <= arrB[0] ? 
      sorted.push(arrA.shift()) : 
      sorted.push(arrB.shift());
  }

  while (arrA.length) {
    sorted.push(arrA.shift());
  }

  while (arrB.length) {
    sorted.push(arrB.shift());
  }
  return sorted;
}




function split(arr) {
  if (arr.length === 1) return arr;
  return  sortBoth(split(arr.slice(0, arr.length / 2)), split(arr.slice(arr.length / 2))) 
}

console.log(split(arr));


























//