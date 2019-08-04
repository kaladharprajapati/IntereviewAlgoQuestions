const arr = [4, 16, 7, 3, 6, 1, 0, 5, 7, 12, 2];


function quickSort(arr, start = 0, end = arr.length - 1){
    if (start >= end) return;

    const pivot = partition(arr, start, end);

    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);

    return arr;
    
}

function partition(arr, start, end) {
    const pivot = end;
    let lastSwapIdx = start;

    for (let idx = start; idx <= end; idx++) {
        if (arr[idx] < arr[pivot]) {
            swap(arr, idx, lastSwapIdx);
            lastSwapIdx++;
        }
    }
    swap(arr, lastSwapIdx, pivot);
    return lastSwapIdx;
}

function swap(arr, a ,b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}


console.log(quickSort(arr))