// Good morning! Here's your coding interview problem for today.
// This problem was asked by Microsoft.
// Given a 2D matrix of characters and a target word,
// write a function that returns whether the word can be found
// in the matrix by going left-to-right, or up-to-down.
// For example, given the following matrix:

// [['F', 'A', 'C', 'I'],
//  ['O', 'B', 'Q', 'P'],
//  ['A', 'N', 'O', 'B'],
//  ['M', 'A', 'S', 'S']]

// and the target word 'FOAM', you should return true, since it's the leftmost column.
// Similarly, given the target word 'MASS', you should return true, since it's the last row.

const board = [
  ["F", "A", "C", "I"],
  ["O", "B", "Q", "P"],
  ["A", "N", "O", "B"],
  ["M", "A", "S", "S"]
];

const words = [];

function isWordExist(board, wordToSearch) {
  const lowerWordToSearch = wordToSearch.toLowerCase();

  // itereting through the rows in the board
  for (let i = 0; i < board.length; i++) {
    const boardRow = board[i];
    const wordInRow = boardRow.join("");

    // if the word exist in the row return it
    if (lowerWordToSearch === wordInRow.toLowerCase()) {
      return true;
    }

    // if we are on the top row, ie 0 index in the board array.
    if (i === 0) {
      // iterete through each of the letters in the row
      for (let j = 0; j < boardRow.length; j++) {
        // itereting each column/letter in the top row, we return the item from this column from each row
        // for example if we on row [0] we return the letter in [0] from each row/array
        const wordInColumn = board.map(row => row[j]).join("");

        if (wordInColumn.toLowerCase() === lowerWordToSearch.toLowerCase()) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(isWordExist(board, "ipbs"));
