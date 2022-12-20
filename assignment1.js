//Q.1  Write a program to find whether a given year is a leap year or not.

// var N=2004;
// if (N%4==0 && N%100!=0) {
//     console.log(N+" is a leap year");
// } else if(N%400==0) {
//     console.log(N + " is a leap year");
// } else{console.log(N + " is not a leap year")}


// Q.2  Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
//°C = [(°F-32)×5]/9
//°F = °C × (9/5) + 32

// console.log("write F for converting farenheit to celcius!");
// console.log("write C for converting farenheit to celcius!");
// let temperature="C",f=20.0,c=40.0;
// switch (temperature) {
//     case "F":
//         c = [(f-32)*5]/9
//         console.log(c+"C");
//         break;
//     case "C":
//         f=c*(9/5)+32
//         console.log(f+"F");
//         break;
//     default :
//     console.log("get lost");
//         break;
// }


//Q.3   Write a program to find the factorial of a number.


function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }
   
  let num = 5;
console.log("Factorial of " + num + " is " + factorial(num));
   