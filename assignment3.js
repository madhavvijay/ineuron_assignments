// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let n = 4;
// let count = 1;
// const pattern = () => {
//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         for (let j = 1; j <= i; j++) {
//             str += count + " ";
//             count++;
//         }
//         console.log(str);
//     }
// }

// pattern();

// 2. Write a program to find whether a given number is armstrong number or

// not -
//     The Armstrong number is a number that is equal to the sum of cubes of

// its digits.For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers.Let's try to understand why 153 is an Armstrong number.
// 153 = (1 * 1 * 1) + (5 * 5 * 5) + (3 * 3 * 3) where:
// (1 * 1 * 1) = 1
//     (5 * 5 * 5) = 125
//         (3 * 3 * 3) = 27
// So:
// 1 + 125 + 27=153


const isArmstrongNumber = (number) => {
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numString[i], 10);
        sum += Math.pow(digit, numDigits);
    }
    console.log(sum);
    return sum === number;
};
const result = isArmstrongNumber(370);
if (result) {
    console.log('Armstrong number');
} else {
    console.log('Not an Armstrong number');
}


// 3. Write a program to find whether a given number is special number or

// not -
//     If the sum of the factorial of digits of a number(N) is equal to the

// number itself, the number(N) is called a special number.
//     eg - 145 is a special number
// Logic - 1! + 4! + 5 != 1 + 24 + 120 i.e 14
// Function to calculate the factorial of a number
const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

// Function to check if a number is a special number
const isSpecialNumber = (number) => {
    const numString = String(number);
    const sumOfFactorials = numString.split('').reduce((acc, digitChar) => {
        const digit = parseInt(digitChar, 10);
        return acc + factorial(digit);
    }, 0);

    return sumOfFactorials === number;
};

// Example usage:
const res = isSpecialNumber(145);
console.log(res ? 'Special number' : 'Not a special number');
