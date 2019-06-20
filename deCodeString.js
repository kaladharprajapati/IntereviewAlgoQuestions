// Given a grid of characters output a decoded message.
// The message for the following would be IROCLD.
// (diagonally down right and diagonally up right if you can't go further
// .. you continue doing this)

// I B C A L K A
// D R F C A E A
// G H O E L A D

const board = [
  ["H", "B", "C", "A", "O", "A", "W", "X", "O", "L", "K"],
  ["D", "E", "F", "L", "A", " ", "A", "O", "T", "F", "Q"],
  ["G", "H", "L", "E", "O", "E", "O", "Z", "R", "M", "D"],
  ["G", "H", "L", "L", "X", "E", "O", "S", "F", "L", "V"]
];

function decode(row, col, matrix, direction, solution) {
  solution = solution.concat(matrix[row][col]);

  if (col === matrix[row].length - 1) {
    return solution;
  }

  if (row + 1 === matrix.length) {
    direction = false;
  } else if (row + 1 === 1) {
    direction = true;
  }

  if (direction) {
    row++;
    col++;
  } else {
    row--;
    col++;
  }

  return decode(row, col, matrix, direction, solution);
}

function decodeNonRecursive(matrix, direction) {
  let row = 0;
  let col = 0;
  let solution = "";
  while (col < matrix[row].length) {
    solution = solution.concat(matrix[row][col]);
    if (row + 1 === matrix.length) {
      direction = false;
    } else if (row + 1 === 1) {
      direction = true;
    }

    if (direction) {
      row++;
      col++;
    } else {
      row--;
      col++;
    }
  }
  return solution;
}

let row = 0;
let col = 0;

console.log(decodeNonRecursive(board, true));
console.log(decode(row, col, board, true, ""));
