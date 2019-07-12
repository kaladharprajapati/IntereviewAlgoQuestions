// Imagine a robot sitting on the upper left hand corner of an NxN grid. The robot can
// only move in two directions: right and down. How many possible paths are there for
// the robot?
// FOLLOW UP
// Imagine certain squares are “off limits”, such that the robot can not step on them.
// Design an algorithm to get all possible paths for the robot.

const board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const hard_board = [
  [0, 0, 0, 0],
  [0, 0, -1, 0],
  [0, 0, -1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

function howManyRoutes(board) {
  for (let row = 0; row < board.length; row++) {
    const currentRow = board[row];
    for (let col = 0; col < currentRow.length; col++) {
      if (row === 0 || col === 0) {
        // because we can only move down/ right
        // if the col or row are the first one we know we can only get to
        // each of the position with 1 way (only go down / only go right). So we mark it as 1
        currentRow[col] = 1;
      } else {
        // else we check if the route is free (i.e. not -1)
        if (currentRow[col] !== -1) {
          if (board[row - 1][col] === -1) {
            // if the position above us is a wall (-1)
            // means we can only get to this position through our left
            // so we mark it as the value from our left
            currentRow[col] = board[row][col - 1];
          } else if (board[row][col - 1] === -1) {
            // if the position to our left is a wall (-1)
            // means we can only get to this position through the top
            // so we mark it as the value from our top
            currentRow[col] = board[row - 1][col];
          } else {
            // else we know we can get to the position or through our left
            // or through our top, so we add both values and this will be our answer
            // for the curreent position
            currentRow[col] = board[row - 1][col] + board[row][col - 1];
          }
        }
      }
    }
  }

  // we return the last index of the board
  return board[board.length - 1][board[0].length - 1];
}

console.log(howManyRoutes(hard_board));
