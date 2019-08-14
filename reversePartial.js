// Good morning! Here's your coding interview problem for today.
// Given a list, sort it using this method: reverse(lst, i, j), which reverses lst from i to j.


function reversePartialJS(arr, i, j) {
    if (i > j) return arr;
    return [...arr.slice(0, i), ...arr.slice(i, j + 1).reverse(), ...arr.slice(j + 1, arr.length)]
}


function reversePartialCopy(arr, i, j) {
   if (i > j) return arr;

   let swapCount = j;
   const resultArr = new Array(arr.length);
   for (let idx = 0; idx < arr.length; idx++) {
       if (idx < i) {
            resultArr[idx] = arr[idx];
       } else if (idx > j) {
            resultArr[idx] = arr[idx];
       } else {
           resultArr[idx] = arr[swapCount];
           swapCount--;
       }
   }
   return resultArr;
}

function reversePartialInPlace(arr, i, j) {

    if (i > j) return arr;

    function swap(arr, a, b) {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }

    let swapCountJ = j;
    let swapCountI = i;
    
    for (let idx = 0; idx < arr.length; idx++) {
        if (idx < i) {
            arr[idx] = arr[idx];
        } else if (idx > j) {
            arr[idx] = arr[idx];
        } else {
           if (swapCountI < swapCountJ) {
            swap(arr, swapCountJ, swapCountI);
            swapCountJ--;
            swapCountI++;
           }
        }
    }
    return arr;
 }
 

console.log(reversePartialInPlace([1,2,3,4,5,6,7], 2, 5));
console.log(reversePartialJS([1,2,3,4,5,6,7], 2, 5));
console.log(reversePartialCopy([1,2,3,4,5,6,7], 2, 5));