// Good morning! Here's your coding interview problem for today.
// This problem was asked by Facebook.
// Given a list of integers, return the largest product that can be made by multiplying any three integers.
// For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
// You can assume the list has at least three integers.

const arr = [10, -10, 5, -2, 3, -3, -5, -11, -12, -12];

function findLargestMultiply(arr, n) {
  const negative = [];
  const positive = [];
  const isNOdd = n % 2 === 0 ? false : true;
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
    negativeSorted.length >= n ? negativeSorted.slice(0, n) : negativeSorted;
  let greatestPositive =
    positiveSorted.length >= n ? positiveSorted.slice(0, n) : positiveSorted;

  const greatestNegativeStatic = [...greatestNegative];

  let negativeValuesInResult = 0;
  const result = [];

  for (let i = 0; i <= greatestNegative.length; i++) {
    for (let j = 0; j <= greatestPositive.length; j++) {
      const absoluteValueOfNegative = Math.abs(greatestNegative[i]);
      const absoluteValueOfNegativeNext = Math.abs(greatestNegative[i + 1]);

      // if we dont have 3 results yet
      if (result.length < n) {
        // on the first loop we check if the SECOND negative value
        // is smaller then first two positive values,
        // or if there is less then 2 negatives in the array from the beggining
        // if so it means we cant have two negatives in our result
        // becaus we cant have odd number of negative,
        // which means we can simply return the positiveSorted array as result
        if (
          absoluteValueOfNegativeNext < greatestPositive[j + 1] ||
          greatestNegativeStatic.length < 2
        ) {
          return greatestPositive.reduce((a, b) => a * b);
        } else if (isNOdd && negativeValuesInResult === n - 1) {
          // if n is an odd number and we already have n - 1 negative values
          // in our result array, it means the next negative value
          // will turn the multiplication into negative value,
          // so just leave it and push the largest positive we have
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

console.log(findLargestMultiply(arr, 3));
