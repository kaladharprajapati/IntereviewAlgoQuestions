// Good morning! Here's your coding interview problem for today.
// This problem was asked by Facebook.
// Given a list of integers, return the largest product that can be made by multiplying any three integers.
// For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
// You can assume the list has at least three integers.

const arr = [10, 10, 5, 3, 11, 12, -12];

function findLargestMultiply(arr) {
  const negative = [];
  const positive = [];
  for (const i of arr) {
    if (i < 0) {
      negative.push(i);
    } else {
      positive.push(i);
    }
  }

  // sort the arrays by the absolute value
  let negativeSorted = negative.sort((a, b) => Math.abs(a) < Math.abs(b));
  let positiveSorted = positive.sort((a, b) => a < b);

  // get only the three first values of each array
  let greatestNegative =
    negativeSorted.length >= 3 ? negativeSorted.slice(0, 3) : negativeSorted;
  let greatestPositive =
    positiveSorted.length >= 3 ? positiveSorted.slice(0, 3) : positiveSorted;

  let negativeValuesInResult = 0;
  const result = [];

  for (let i = 0; i <= greatestNegative.length; i++) {
    for (let j = 0; j <= greatestPositive.length; j++) {
      const absoluteValueOfNegative = Math.abs(greatestNegative[i]);

      // if we dont have 3 results yet
      if (result.length < 3) {
        // on the first loop we check if the SECOND negative value
        // is smaller then first two positive values,
        // or if there is less then 2 negatives in the array from the beggining
        // if so it means we cant have two negatives in our result
        // becaus we cant have odd number of negative,
        // which means we can simply return the positiveSorted array as result
        if (
          (greatestNegative[j + 1] < greatestPositive[i] &&
            greatestNegative[j + 1] < greatestPositive[i + 1]) ||
          greatestNegative.length < 2
        ) {
          return greatestPositive.reduce((a, b) => a * b);
        } else if (negativeValuesInResult === 2) {
          // if there is already 2 negative values in our array
          // ignore other negative values and push the largest positive value
          // so the final result will stay positive
          result.push(greatestPositive[0]);
          break;
        } else {
          // if we dont have 2 negative values in our array, and still dont have 3 results
          // check each item to see who is larger, and push the larger one into the results array
          if (absoluteValueOfNegative > greatestPositive[i]) {
            result.push(greatestNegative[i]);
            negativeValuesInResult++; // count the number of negative results
            greatestNegative.shift();
          } else {
            result.push(greatestPositive[i]);
            greatestPositive.shift();
          }
        }
      } else {
        break;
      }
    }
  }

  return result.reduce((a, b) => a * b);
}

console.log(findLargestMultiply(arr));
