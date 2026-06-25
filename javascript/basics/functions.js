//what is a function in javascript
//A function in JavaScript is a reusable block of code that performs a specific task.
  //  It can take inputs, called parameters, and can return an output.
    //Functions help to organize code, make it more readable, and allow for code reuse.

//Here is a basic example of a function in JavaScript:
function greet(name) {
    return "Hello, " + name + "!";
}

let message = greet("Alice");
console.log(message); // Output: Hello, Alice!

//anonymous function example
let add = function(a, b) {
    return a + b;
};

let sum = add(5, 3);
console.log("Sum:", sum); // Output: Sum: 8

//arrow function example
let multiply = (x, y) => x * y;

let product = multiply(4, 6);
console.log("Product:", product); // Output: Product: 24

//function with no parameters
function sayHello() {
    console.log("Hello!");
}