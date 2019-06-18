// Good morning! Here's your coding interview problem for today.
// This problem was asked by Apple.
// Suppose you have a multiplication table that is N by N. That is,
// a 2D array where the value at the i-th row and j-th column is (i + 1) * (j + 1) (if 0-indexed) or i * j (if 1-indexed).
// Given integers N and X, write a function that returns the number of times X appears as a value in an N by N multiplication table.
// For example, given N = 6 and X = 12, you should return 4, since the multiplication table looks like this:

// | 1 | 2 | 3 | 4 | 5 | 6 |
// | 2 | 4 | 6 | 8 | 10 | 12 |
// | 3 | 6 | 9 | 12 | 15 | 18
// | 4 | 8 | 12 | 16 | 20 | 24 |
// | 5 | 10 | 15 | 20 | 25 | 30 |
// | 6 | 12 | 18 | 24 | 30 | 36 |

const table = [];
const x = 12;
const n = 6;

function multiplicationTable(n, x) {
  let howManyTimesXAppear = 0; // counter for the timex X appear

  for (let i = 0; i < n; i++) {
    // creating table witn n empty rows
    table[i] = [];
    for (let j = 0; j < n; j++) {
      // in each row we create n columns.
      // each iteration fill the row with values
      let valueInIndex = (i + 1) * (j + 1); // the value to add (basically multiplication of the row num and the column num)

      // checking if the value addedis equel to X
      // add it to the array if so
      if (valueInIndex === x) {
        howManyTimesXAppear++;
      }
      table[i].push(valueInIndex);
    }
  }
  return howManyTimesXAppear;
}

console.log(multiplicationTable(n, x));