// 1. Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

function Triangle(a = 4, b = 3, c = 5) {
    if (a == b && b == c)
        console.log("The Given Triangle is equilateral");
    else if (a == b || b == c || c == a)
        console.log("The given Triangle is isosceles");
    else
        console.log("The given Triangle is scalene");
    return;
}

Triangle();


// 2. Write a function using switch case to find the grade of a student based
// on marks obtained
//     a. “S grade” if the marks are between 90 and 100.
//     b. “A grade” if the marks are between 80 and 90.
//     c. “B grade” if the marks are between 70 and 80.
//     d. “C grade” if the marks are between 60 and 70.
//     e. “D grade” if the marks are between 50 and 60.
//     f. “E grade” if the marks are between 40 and 50.
//     g. “Student has failed” if the marks are between 0 and 40.
//     h.Else output “Invalid marks”.

function findGrade(marks = 87.5) {
    switch (true) {
        case marks >= 90 && marks <= 100:
            console.log(`S grade`);
            break;
        case marks >= 80 && marks <= 89:
            console.log(`A grade`);
            break;
        case marks >= 70 && marks <= 79:
            console.log(`B grade`);
            break;
        case marks >= 60 && marks <= 69:
            console.log(`C grade`);
            break;
        case marks >= 50 && marks <= 59:
            console.log(`D grade`);
            break;
        case marks >= 40 && marks <= 49:
            console.log(`E grade`);
            break;
        case marks >= 0 && marks <= 39:
            console.log(`Student has failed`);
            break;
        default:
            console.log(`Invalid marks`);
            break;
    }
}

findGrade();



// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000

const findSum = () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    console.log(sum);
    return sum;

};

findSum();

// 4. Write a program to find the factorial of all prime numbers between a
// given range.Range will be passed as 2 values in the function
//     parameters.eg - if it is needed to find the values for numbers 1 - 100, then
// function declaration can look like - function prime(1,100).
let factorial = 1;
const prime = (e, f) => {

    for (let i = e; i <= f; i++) {
        factorial = factorial * i;
    }

    console.log(factorial);
    return factorial;
}
prime(4, 5);
