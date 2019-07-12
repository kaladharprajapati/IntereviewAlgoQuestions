const strm = process.stdout;
const util = require("util");
const drawPath = require("./drawPath");

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

function findPath(maze, row = 0, col = 0, path = [], count = 1, visited = {}) {
  count += 1;
  if (
    row < 0 ||
    col < 0 ||
    row >= maze.length ||
    col >= maze[row].length ||
    maze[row][col] === "@" ||
    visited[`${row},${col}`]
  ) {
    return false;
  }

  (async function() {
    await wait(200 * count);
    strm.cursorTo(0, 0);
    strm.write(util.format(drawPath(maze, path)));
  })();

  if (maze[row][col] === "F") {
    path = [...path, { row, col }];
    return true;
  }

  visited[`${row},${col}`] = true;

  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (!(r !== row && c !== col)) {
        const found = findPath(
          maze,
          r,
          c,
          [...path, { row, col }],
          count,
          visited
        );
        if (found) {
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = findPath;
