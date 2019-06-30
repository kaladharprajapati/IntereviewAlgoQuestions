const dice = [1, 2, 3, 4, 5, 6]; // optoins of the dice
const maxNumOfThrow = 2; // number of throws we can have
const possibilities = []; // holder for all the possibilities

function allDiceOptions(
  numOfThrows = 0, // we set the number of throws we had to 0
  opts = [] // this is a holder for each call (here we remember each individual option)
) {
  if (numOfThrows < maxNumOfThrow) {
    // if {numOfThrows} is lower then {maxNumOfThrow}
    // ie. we have more dices to roll
    for (let idx = 0; idx < dice.length; idx++) {
      // get all the options for this dice,
      // and appand the current option to the options we retrived
      // from earlier dices,
      // so if in this call opts = [1]
      // here we make another 6 more calls where opts will be:
      // [1,1] [1,2] [1,3] [1,4] [1,5] [1,6]
      allDiceOptions(numOfThrows + 1, [...opts, dice[idx]]);
    }
  } else {
    // if there are no more dices
    // push the options one by one to the main holder
    possibilities.push(opts);
  }
  return possibilities;
}

console.log(allDiceOptions());
