// Good morning! Here's your coding interview problem for today.
// This problem was asked by Microsoft.
// A number is considered perfect if its digits sum up to exactly 10.
// Given a positive integer n, return the n-th perfect number.
// For example, given 1, you should return 19. Given 2, you should return 28.

function returnPerfectNum(n) {
  const singleDigitsArray = n
    .toString()
    .split("")
    .map(i => parseInt(i));

  const sumOfSingleDigits = singleDigitsArray.reduce((a, b) => a + b);

  // if the number sum is 10 or higher simply return the number
  if (sumOfSingleDigits >= 10) {
    return n;
  }

  const creatingPerfectNumber = 10 - sumOfSingleDigits;
  singleDigitsArray.push(creatingPerfectNumber);
  const perfetNumber = parseInt(singleDigitsArray.join(""));

  return perfetNumber;
}

console.log(returnPerfectNum(12));
