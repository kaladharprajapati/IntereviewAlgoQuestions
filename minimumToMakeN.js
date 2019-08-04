// Good morning! Here's your coding interview problem for today.
// This problem was asked by Google.
// Find the minimum number of coins required to make n cents.
// You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.
// For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢, and a 1¢.




const n = 37;

function calc(n) {

    const coins           = [25,10,5,1];
    let i                 = 0;
    let sum               = 0;
    let minCoinsCounter   = 0;
    let needAnotherNCoins = n;

    while(i < coins.length) {
        if (coins[i] <= needAnotherNCoins) {

            const coinsToAdd   = Math.floor(needAnotherNCoins / coins[i]);
            const currerntSum  = coinsToAdd * coins[i]

            minCoinsCounter   += coinsToAdd;
            sum               += currerntSum;
            needAnotherNCoins -= currerntSum;

            if (sum === n) return minCoinsCounter;
        }
        i++;

    }

    return null;
}

console.log(calc(n)); /*?*/