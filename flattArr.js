//Iterativley do the same thing
const arr = [1, 3, 4, [7, 5, 4, [9, 4, 1, [1, 2, 3]]]];
const arr2 = [1, 3, 4, [7, 5, 4, [9, 4, 1, [1, 2, 3]]]];

function flatIter(arr) {
  const flat = [];

  while (arr.length) {
    const element = arr.shift();
    if (Array.isArray(element)) {
      arr = arr.concat(element);
    } else {
      flat.push(element);
    }
  }
  return flat;
}

function flatRecurs(arr) {
  let holder = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      holder = holder.concat(flatRecurs(item, holder));
    } else {
      holder.push(item);
    }
  }
  return holder;
}

console.log(flatIter(arr));
console.log(flatRecurs(arr2));
