if (process.argv.length < 4) {
  return console.log(
    "please set all required arguments: ./file.js [algo_name] [path_to_maze]"
  );
}

const path = process.argv[3];
const { maze } = require(path);
const findPath = require("./dfs");
const findShortestPath = require("./bfs");
const dijkstars = require("./dijkstars");
const { exec } = require("child_process");

process.stdout.write("\033c");

(async () => {
  switch (process.argv[2]) {
    case "dfs":
      findPath(maze);
      break;
    case "bfs":
      findShortestPath(maze);
      break;
    case "dij":
      dijkstars(maze);
      break;

    default:
      console.log("please choose `dfs` || ``bfs || `dij`");
  }
})();
