// Take input from the user in the function parameter and return the output
// using the return statement.

// examples-
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

function matchHouses(step) {
    if (step === 0) {
      return 0;
    } else if (step === 1) {
      return 6;
    } else {
      return 5 * step + 1;
    }
  }

console.log(matchHouses(1)); // Output: 6
console.log(matchHouses(2)); // Output: 11
console.log(matchHouses(87)); // Output: 436
console.log(matchHouses(3)); // Output: 16
