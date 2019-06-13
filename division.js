// Good morning! Here's your coding interview problem for today.
// This question was asked by ContextLogic.
// Implement division of two positive integers without using the division,
// multiplication, or modulus operators. Return the quotient as an integer,
// ignoring the remainder.

function division(x, y) {
  let ans = 0;
  let times = 0;
  while (ans + y <= x) {
    ans += y;
    times++;
  }
  return times;
}

console.log(division(6, 2));
