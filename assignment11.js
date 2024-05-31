// 1. Write a JavaScript program to take an array as input from the user and calculate
// the sum of numbers in odd places and the sum of numbers at even places.
// Sample Input:
// [1, 2, 3, 4, 5]
// Explanation:
// Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
// Sum of Numbers at Even Places = 2 + 4 = 6
// Difference = 9 - 6 = 3
// Sample Output:
// Difference = 3
// Odd Elements = 3
// Even Elements = 2
// Average = 3
// GCD = 3

// function calculateSums(arr) {
//     let sumOddPositions = 0;
//     let sumEvenPositions = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             sumEvenPositions += arr[i];
//         } else {
//             sumOddPositions += arr[i];
//         }
//     }

//     return {
//         sumOddPositions,
//         sumEvenPositions
//     };
// }

// const inputArray = [1, 2, 3, 4, 5, 6];
// const result = calculateSums(inputArray);
// console.log(`Sum of numbers at odd positions: ${result.sumOddPositions}`);
// console.log(`Sum of numbers at even positions: ${result.sumEvenPositions}`);

// //     a) Print the difference between the two sums
// const dif = result.sumEvenPositions - result.sumOddPositions;
// console.log(dif);

// let oddSum = result.sumOddPositions;
// let evenSum = result.sumEvenPositions;

// b) Print the number of elements in odd places
// function countElementsInOddPlaces(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 !== 0) {
//             count++;
//         }
//     }

//     return count;
// }
// const inputArray = [1, 2, 3, 4, 5, 6];
// const numberOfElementsInOddPlaces = countElementsInOddPlaces(inputArray);
// console.log(`Number of elements in odd places: ${numberOfElementsInOddPlaces}`);
// c) Print the number of elements in even places
// function countElementsInEvenPlaces(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             count++;
//         }
//     }

//     return count;
// }
// const inputArray = [1, 2, 3, 4, 5, 6];
// const numberOfElementsInEvenPlaces = countElementsInEvenPlaces(inputArray);
// console.log(`Number of elements in even places: ${numberOfElementsInEvenPlaces}`);


// d) Print the average of all elements in the array
// let sum = 0;
// function avg(arr) {
//     for (let i = 0; i < inputArray.length; i++) {
//         sum += inputArray[i];


//     }
//     let average = sum / inputArray.length
//     return average;
// }

// const inputArray = [1, 2, 3, 4, 5, 6];
// const result = avg(inputArray);
// console.log(`${result}`);


// e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
// Places

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
// let sumOfOddNums = 0;
// let sumOfEvenNums = 0;
// let hcf = 0;
// function GCD(inputArray) {

//     for (let i = 0; i < inputArray.length; i++) {
//         if (i % 2 === 0) {
//             sumOfEvenNums += inputArray[i];
//         } else {
//             sumOfOddNums += inputArray[i];
//         }
//     }
//     console.log(`odd:${sumOfEvenNums} and even: ${sumOfOddNums}`);
// }
// function gcd(sumOfOddNums, sumOfEvenNums) {
//     let min = 0;
//     if (sumOfEvenNums > sumOfOddNums) {
//         min = sumOfOddNums;
//     } else {
//         min = sumOfEvenNums;
//     }

//     for (let i = 1; i < min + 1; i++) {
//         if (sumOfEvenNums % i === 0 && sumOfOddNums % i === 0) {
//             hcf = i;
//         }

//     }
//     return hcf;
// }
// GCD(inputArray);
// const theResult = gcd(sumOfOddNums, sumOfEvenNums);
// console.log(theResult);









// 2. Write a JavaScript program to take 2 arrays from the user and check if the
// number 4 exists in any of the arrays, or both of the arrays.
// Sample Input 1:
// [1, 2, 3, 4, 5]
// [4, 6, 1, 8, 2]
// Output:
// 4 in both arrays
// Sample Input 2:
// [1, 2, 3, 6, 5]
// [4, 6, 1, 8, 2]
// Output:
// 4 in array 2
// Sample Input 3:
// [1, 2, 3, 4, 5]
// [5, 6, 1, 8, 2]
// Output:
// 4 in array 1

// let arr1 = [8, 4, 9, 23, 7];
// let arr2 = [0, 4, 9, 23, 7];

// function check(arr1, arr2) {
//     if (arr1.includes(4) && arr2.includes(4)) {
//         console.log("4 in both arrays");
//     } else if (arr1.includes(4)) {
//         console.log("4 in  array 1");

//     }
//     else if (arr2.includes(4)) {
//         console.log("4 in array 2");

//     } else {
//         console.log("4 in no arrays");

//     }

// }

// check(arr1, arr2);






// 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
// array.
//     Note: Do not use array.flat();
// Sample Input:
// [1, 2, [3, 4, [5]]]
// Output:
// [1, 2, 3, 4, 5]

// let data = [1, 2, [3, 4, [5]]];

// let flatData = [1, 2, 3, 4, 5];

// let flatD = [];
// const flatArray = (input) => {


//     input.map((element) => {
//         if (Array.isArray(element)) {
//             flatArray(element);
//         } else {
//             flatD.push(element);
//         }
//     });
//     return flatD;
// }

// const result = flatArray(data);
// console.log(result);





// 4. Write a JavaScript program to take an array as input from the user and:
// a) Store all duplicate elements in a separate array
// b) Remove the duplicate elements from the original array
// Sample Input:
// [1, 2, 3, 2, 3, 4, 5]
// Output:
// Duplicate Elements = [2, 3]
// Array without duplicate elements = [1, 2, 3, 4, 5]

// function processArray(arr) {
//     let duplicates = [];
//     let uniqueElements = [];
//     let elementCount = {};

//     arr.forEach(element => {
//         elementCount[element] = (elementCount[element] || 0) + 1;
//     });


//     for (let element in elementCount) {
//         if (elementCount[element] > 1) {

//             for (let i = 1; i < elementCount[element]; i++) {
//                 duplicates.push(Number(element));
//             }
//         }
//         uniqueElements.push(Number(element));
//     }

//     return {
//         duplicates: duplicates,
//         uniqueElements: uniqueElements
//     };
// }
// let inputArray = [1, 2, 3, 2, 3, 4, 5, 2];

// let result = processArray(inputArray);
// console.log("Duplicate Elements =", result.duplicates);
// console.log("Array without duplicate elements =", result.uniqueElements);



// 5. Debug the given JavaScript program and execute the correct code.

// function thirdLargest(arr, arr_size) {
//     // There should be at least three elements
//     if (arr_size < 3) {
//         console.log("Invalid Input");
//         return;
//     }

//     let first = Number.MIN_VALUE;
//     let second = Number.MIN_VALUE;
//     let third = Number.MIN_VALUE;

//     for (let i = 0; i < arr_size; i++) {
//         if (arr[i] > first) {
//             third = second;
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i] !== first) {
//             third = second;
//             second = arr[i];
//         } else if (arr[i] > third && arr[i] !== second && arr[i] !== first) {
//             third = arr[i];
//         }
//     }

//     console.log("The third largest element is ", third);
// }

// let arr = [12, 13, 1, 10, 34, 16];
// let n = arr.length;
// thirdLargest(arr, n);
