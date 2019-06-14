// Good morning! Here's your coding interview problem for today
// This problem was asked by Amazon.
// Given a matrix of 1s and 0s, return the number of "islands" in the matrix.
// A 1 represents land and 0 represents water,
// so an island is a group of 1s that are neighboring whose perimeter
// is surrounded by water.
// For example, this matrix has 4 islands.

// 1 0 0 0 0
// 0 0 1 1 0
// 0 1 1 0 0
// 0 0 0 0 0
// 1 1 0 0 1
// 1 1 0 0 1

const board = [
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 0, 0, 1]
];

function searchIslands(row, col, matrix) {
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[row].length) {
    return;
  }
  if (matrix[row][col] === 0) {
    return;
  }
  matrix[row][col] = 0;

  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r !== row || c !== col) {
        searchIslands(r, c, matrix);
      }
    }
  }
  return [row, col];
}

function rotateBoard(matrix) {
  let numOfIslands = 0;

  for (let row = 0; row < matrix.length; row++) {
    const currentRow = matrix[row];
    for (let col = 0; col < currentRow.length; col++) {
      if (currentRow[col] === 1) {
        numOfIslands++;
        searchIslands(row, col, matrix);
      }
    }
  }
  return numOfIslands;
}

console.log(rotateBoard(board));
