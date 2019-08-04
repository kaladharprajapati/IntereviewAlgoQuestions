
// Good morning! Here's your coding interview problem for today.
// This problem was asked by Facebook.
// Write a function that rotates a list by k elements. 
// For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. 
// Try solving this without creating a copy of the list. How many swap or move operations do you need?

const arr = [1,2,3,4,5,6]


function rotate(arr, n = 0) {
    return arr.slice(n).concat(arr.slice(0, n))
}

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function rotateInPlace(arr, n = 0) {
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < arr.length - 1; j++) {
            swap(arr, j, j+1)
        }
    }
    return arr
}

console.log(rotateInPlace(arr, 2))