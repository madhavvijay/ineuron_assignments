// 1. Carefully observe this example.
//     a) Is the InnerFunction() a closure ?
//         b) What is output of this program

// function OuterFunction() {
//     var outerVariable = 100;
//     function InnerFunction() {
//         alert(outerVariable);
//     }
//     return InnerFunction;
// }
// var innerFunc = OuterFunction();
// innerFunc();

//yes this is a closure
// 100


// 2. What is the difference between a closure and a scope ?
//  scope defines the accessibility and visibility of variables based on their location in the code's nested functions. Closures are functions that have access to variables in their outer function scope, even after the outer function has returned.

//     3. What is a lexical scope and how is it related to closure ?    
// lexical scope is a characteristic of how JavaScript functions are scoped within their parent functions or blocks, based on where they are declared in the source code.Lexical scope ensures that inner functions have access to variables defined in their outer functions, regardless of where the inner function is called from.
//         4. Output of following closure ?
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged? final value of i i.e 3, because in setimeout i is already been iterated and its value is 3, it only happens because of 'var' keyword because it is function scoped
    }, 1000);
}

//output = 3
//         3
//         3