function drawPath(maze, path) {
  for (let idx = 0; idx < path.length; idx++) {
    const step = path[idx];
    maze[step.row][step.col] = "*";
  }
  return maze;
}

module.exports = drawPath;
