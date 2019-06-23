// Implement the “paint fill” function that one might see on
// many image editing programs. That is, given a screen
// (represented by a 2 dimensional array of Colors), a point, and a new color,
// fill in the surrounding area until you hit a border of that color.’

const image = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

function fill(row, col, image) {
  if (row < 0 || col < 0 || row >= image.length || col >= image[row].length) {
    return;
  }

  if (image[row][col] === 1) {
    return;
  }

  image[row][col] = 1;

  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (!(r !== row && c !== col)) {
        fill(r, c, image);
      }
    }
  }
  return image;
}

function scanImage(image) {
  for (let row = 0; row < image.length; row++) {
    const currentRow = image[row];
    for (let col = 0; col < currentRow.length; col++) {
      if (image[row][col] === 1) {
        if (image[row + 1][col] === 0) {
          fill(row + 1, col, image);
        } else if (image[row + 1][col + 1] === 0) {
          fill(row + 1, col + 1, image);
        }

        return image;
      }
    }
  }
}

console.log(scanImage(image));
