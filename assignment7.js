// 1. Input a String S, and check its length and if the length is greater than 4,
//     truncate the input String and output the result -
//         Input: Ice Output: Ice
// Input:Icecream Output:Icec...



// let S = "Hey there what are you doing";

// function Truncate(S) {
//     if (S.length > 4) {
//         console.log(S.slice(0, 4) + "...");
//     }
//     else console.log(S);
// }

// Truncate(S);




// 2. Input a String S with multiple words, and remove whitespaces and
// output the result -
//     Input: “Hii Boy” Output: “HiiBoy”

// let S = "Hii Boy How are You";
// function RemoveWhiteSpaces(S) {
//     console.log(S.split(' ').join(''));
// }
// RemoveWhiteSpaces(S);


// 3. Input a String S with two words, and replace first word with second word
// and display the result -
//     Input: “Hii Boy” Output: “Boy Hii”

// let text = "Hii Boy";
// let newText = text.split(" ");
// let reverseText = newText.reverse();
// let updateText = reverseText.join(" ");

// console.log(updateText);



// 4. Input a String S with a word, and replace character “a” with “x” and
// display the result -
//     Input: “apple” Output: “xpple”

// let S = `apple`;
// let replaceS = S.replace(/a/i, `x`)
// console.log(replaceS);



// 5. What string method can be used to convert string into array ?

//Ans5 - split method


// 6. What string method can be used to check the occurrence of a specified
// text in a string ?

//Ans6 - indexOf()


// 7. How can you break a string to a newline in Javascript ?
//You can break a string into multiple lines(newline) in JavaScript using the newline   character \n.


// 8. Write a Javascript function to test whether the first character of a string
// is lowercase.


// function test(S) {
//     let firstChar = S.at(0);
//     if (firstChar === firstChar.toLowerCase()) {
//         console.log('true, it is in lowercase');
//     } else {
//         console.log('false, it is in uppercase');
//     }
// }
// test('Hello');


// 9. Give a correct verdict to users input if he enters "yes", "YES", "Yes", etc
//     (any combination) using string methods.
//         How will you handle that ?

// function getVerdict(userInput) {
//     let userInputLowercase = userInput.toLowerCase();

//     if (userInputLowercase === "yes") {
//         return "Correct verdict: Affirmative!";
//     } else {
//         return "Incorrect verdict: Not affirmative!";
//     }
// }

// console.log(getVerdict("yes"));
// console.log(getVerdict("YES"));
// console.log(getVerdict("Yes"));
// console.log(getVerdict("no"));
// console.log(getVerdict("No"));



// 10. Given a String S, achieve following tasks


// a) Convert the String into upper case.

// let S = "example";
// let upperCaseS = S.toUpperCase();
// console.log(upperCaseS);


// b) Convert only the first character to uppercase.

// let S = "example";
// let firstCharUpperCase = S.charAt(0).toUpperCase() + S.slice(1);
// console.log(firstCharUpperCase);

//     c) Convert the String into lower case.

// let S = "EXAMPLE";
// let lowerCaseS = S.toLowerCase();
// console.log(lowerCaseS);

// d) Break the string into two halves and swap them.

// let S = "example";
// let firstHalf = S.slice(0, Math.floor(S.length / 2));
// let secondHalf = S.slice(Math.ceil(S.length / 2));
// let swappedS = secondHalf + firstHalf;
// console.log(swappedS);


//     e) Count the repeating characters.

// let S = "hello";
// let charCount = {};

// // Using string methods
// S.split('').forEach(char => {
//     charCount[char] = (charCount[char] || 0) + 1;
// });

// console.log(charCount);


//         f) Reverse the string

// let S = "example";
// let reversedS = S.split('').reverse().join('');
// console.log(reversedS);
