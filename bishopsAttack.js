// Good morning! Here's your coding interview problem for today.
// This problem was asked by Google.
// On our special chessboard,
// two bishops attack each other if they share the same diagonal.
// This includes bishops that have another bishop located between them,
// i.e. bishops can attack through pieces.
// You are given N bishops, represented as (row, column)
// tuples on a M by M chessboard.
// Write a function to count the number of pairs of bishops that attack each other.
// The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).
// For example, given M = 5 and the list of bishops:

// (0, 0)
// (1, 2)
// (2, 2)
// (4, 0)

// The board would look like this:

// [b 0 0 0 0]
// [0 0 b 0 0]
// [0 0 b 0 0]
// [0 0 0 0 0]
// [b 0 0 0 0]

const board = [
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0]
];

function searchAttackers(row, col, matrix, parent, attackers, direction) {
  const inBoardes =
    row >= 0 && col >= 0 && row < matrix.length && col < matrix[row].length;

  // return if the position is out of boarders
  if (!inBoardes) {
    return;
  }

  const child = `${row}${col}`;
  // if we have found a bishop, and its not the bishop we start with
  // push the couple into our results array
  if (matrix[row][col] === 1 && child !== parent) {
    attackers.push([parent, child]);
  }

  // try it on every position in the right diagonal of the board
  if (direction === 1) {
    searchAttackers(row + 1, col - 1, matrix, parent, attackers, 1);
  }

  // try it on every position in the left diagonal of the board
  if (direction === 0) {
    searchAttackers(row + 1, col + 1, matrix, parent, attackers, 0);
  }
}

function explorBoard(matrix) {
  const attackers = [];
  for (let row = 0; row < matrix.length; row++) {
    const currentRow = matrix[row];
    for (let col = 0; col < currentRow.length; col++) {
      const current = currentRow[col];
      const parent = `${row}${col}`;

      // if we have found bishop parent on our board,
      // start eexploring all the possible positions to attack
      if (currentRow[col] === 1) {
        searchAttackers(row, col, matrix, parent, attackers, 1);
        searchAttackers(row, col, matrix, parent, attackers, 0);
      }
    }
  }
  return attackers;
}

console.log(explorBoard(board));
