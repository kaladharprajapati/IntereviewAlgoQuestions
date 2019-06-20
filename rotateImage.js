// Given an image represented by an NxN matrix,
// write a method to rotate the image by 90 degrees. Can you do this in place?

const image = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0]
];

function rotateImage(image) {
  const newImage = [];

  for (let row = 0; row < image.length; row++) {
    const currentRow = image[row];
    for (let col = 0; col < currentRow.length; col++) {
      const columnsLength = currentRow.length - 1;
      const newRow = col;
      const newCol = columnsLength - row;
      if (!newImage[newRow]) {
        newImage[newRow] = [];
        newImage[newRow][newCol] = image[row][col];
      } else {
        newImage[newRow][newCol] = image[row][col];
      }
    }
  }

  return newImage;
}
console.log(rotateImage(image));
