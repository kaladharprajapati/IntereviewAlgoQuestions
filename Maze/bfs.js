const strm = process.stdout;
const util = require("util");
const drawPath = require("./drawPath");

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function findShortestPath(maze) {
  const q = [];
  const path = [];
  const visited = {};
  const inQueue = {};
  let row = 0;
  let col = 0;
  const maze_solved = JSON.parse(JSON.stringify(maze));
  function isRowSafe(row, col) {
    return (
      row >= 0 &&
      row < maze.length &&
      !visited[`${row},${col}`] &&
      !inQueue[`${row},${col}`] &&
      maze[row][col] !== "@"
    );
  }
  function isColSafe(row, col) {
    return (
      col >= 0 &&
      col < maze[0].length &&
      !visited[`${row},${col}`] &&
      !inQueue[`${row},${col}`] &&
      maze[row][col] !== "@"
    );
  }

  q.push({ row, col });
  let count = 0;
  while (true) {
    count++;

    const move = q.shift();

    strm.write(util.format(drawPath(maze, path)));

    strm.cursorTo(0, 0);
    await wait(50);

    row = move.row;
    col = move.col;
    visited[`${row},${col}`] = true;
    path.push(move);

    if (maze[row][col] === "F") break;

    if (isRowSafe(row + 1, col)) {
      q.push({ row: row + 1, col, parent: move });
      inQueue[`${row + 1},${col}`] = true;
    }
    if (isRowSafe(row - 1, col)) {
      q.push({ row: row - 1, col, parent: move });
      inQueue[`${row - 1},${col}`] = true;
    }

    if (isColSafe(row, col + 1)) {
      q.push({ row, col: col + 1, parent: move });
      inQueue[`${row},${col + 1}`] = true;
    }
    if (isColSafe(row, col - 1)) {
      q.push({ row, col: col - 1, parent: move });
      inQueue[`${row},${col - 1}`] = true;
    }
  }

  let last = path[path.length - 1];
  let final = [];
  let parent = last.parent;
  final.push(last);

  // drawing shortest path
  while (parent) {
    final.push(parent);
    parent = parent.parent;
  }

  console.log(drawPath(maze_solved, final));

  return final;
}

module.exports = findShortestPath;
