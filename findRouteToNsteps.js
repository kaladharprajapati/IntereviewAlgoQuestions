// There's a staircase with N steps, and you can climb 1 or 2 steps at a time.
// Given N, write a function that returns the number of unique ways you can climb the staircase.
// The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time,
// you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5},
// you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.

function findRoute(n, steps) {
  const path = new Array(n + 1);
  path.fill(0);
  path[0] = 1;
  path[1] = 1;
  path[2] = 2;

  let currentLocation = 3;

  while (currentLocation <= n) {
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];

      if (path[currentLocation - step]) {
        currentLocation - step;
        path[currentLocation] += path[currentLocation - step];
      }
    }

    currentLocation++;
  }

  return path[n];
}

console.log(findRoute(6, [1, 2, 5]));
