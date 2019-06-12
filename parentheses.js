// Good morning! Here's your coding interview problem for today.
// This problem was asked by Google.
// Given a string of parentheses,
// write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).
// For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.

const parenthesesArr = "()())()()(((())((()))))))))))(((())())";

function parenthesesRemoval(parentheses) {
  // spliting the string to array
  // so it will bee easier to work with
  parentheses = parentheses.split("");
  const open = "(";
  const close = ")";
  const whatRemoved = [];
  let i = 0;

  while (i < parentheses.length) {
    const currentChar = parentheses[i];
    const nextChar = parentheses[i + 1];

    // if the current char is open and next is close
    // we have valid ()
    // so move on 2 slots
    if (currentChar === open && nextChar === close) {
      i += 2;
    } else if (
      (currentChar === close && nextChar === open) || // if the current is closed and next is open
      (currentChar === open && nextChar === open) || // if current is open and next is open
      (currentChar === close && nextChar === close) || // if the current is closed and the next is closed
      !nextChar // is there isnt next char mean it couldnt be valid
    ) {
      // if any of the above is true
      // means the couple cant be valid
      // so remove the char
      whatRemoved.push(currentChar);
      parentheses.splice(i, 1);
    }
  }

  return {
    parentheses: parentheses.join(""),
    whatRemoved,
    itemsRemoved: whatRemoved.length
  };
}

console.log(parenthesesRemoval(parenthesesArr)); /*?*/
