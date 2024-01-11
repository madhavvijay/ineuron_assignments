// 1) Perform the following operations to provide the implementation for a
// Rectangle class. The operations are:
// 1. Add an area() method to the Rectangle class.
// 2. Create a Square class that satisfies the following conditions:
// ○ It is a subclass of Rectangle.
// ○ It contains a constructor and no other methods.
// ○ It can use the Rectangle class' area method to print the area
// of a Square object.

class Rectangle {
    constructor(length, breadth){
        this.lenght = length;
        this.breadth = breadth;
    }    
    area(){
        return this.lenght * this.breadth ;
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side);
    }
}

const rectangle = new Rectangle(5, 7);
console.log(rectangle.area()); // Output: 35

const square = new Square(4);
console.log(square.area()); // Output: 16


// 2) Write a javascript function find_largest to return the nth largest number
// in an array eg- given an array of integers- [3,45,6,7,23,5,7,8]
// find_largest(3) will return third largest number from the above array -
// which is 8.

// let number = [3,45,6,7,23,5,7,8];
// function compareNumbers(a, b) {
//   return b - a;
// }
// // numbers and sorted are both [1, 1, 3, 4, 5]
// console.log();

//  let boi = number.sort(compareNumbers);
//  const find_largest = (n) => boi[n - 1];

//  console.log(find_largest(4));






// 3) Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers.
// For example if you accept 025468 as the output should be 0-254-6-8.
// computeDash(025468) -> 0-254-6-8.


// let num = 403687439;
// function outDashes(num) {

// let str = num.toString();
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i]%2 === 0 && str[i + 1]%2===0) {
//         result += str[i] + "-";
        
//     } else {
//         result += str[i];
//     }
    
// }
//     return result;
// }
// console.log(outDashes(num));

