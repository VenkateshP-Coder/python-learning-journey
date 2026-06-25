//strings manipulation methods
let str = " Hello, World! ";

//accessing values from the string
console.log('Character at index 1:', str[1]); //output: Character at index 1: H

//length of the string
console.log('Length:', str.length); //output: Length: 15

//convert to uppercase
console.log('Uppercase:', str.toUpperCase()); //output: Uppercase:  HELLO, WORLD!

//convert to lowercase
console.log('Lowercase:', str.toLowerCase()); //output: Lowercase:  hello, world!

//trim whitespace
console.log('Trimmed:', str.trim()); //output: Trimmed: Hello, World!

//replace substring
let newStr = str.replace("World", "JavaScript");
console.log('Replaced:', newStr); //output: Replaced:  Hello, JavaScript!

//find substring
console.log('Index of "World":', str.indexOf("World")); //output: Index of "World": 8
let str2 = "Hello, Hello, World!";
console.log('Last Index of "Hello":', str2.lastIndexOf("Hello")); //output: Last Index of "Hello": 7
console.log('Last Index of "Hello":', str2.indexOf("Hello",2)); //output: Last Index of "Hello": 7

//slice substring
console.log('Sliced (7, 12):', str.slice(7, 12)); //output: Sliced (7, 12): World

//conversions
let dateStr = "25";
let dateStr1 = "26";
let dateNumSum = Number(dateStr) + Number(dateStr1);
console.log('Converted to Number:', dateNumSum); //output: Converted to Number: 25

//concatination
let greetStr = "Hello";
let nameStr = "Alice";
let fullGreet = greetStr.concat(", ", nameStr, "!");
console.log('Concatenated String:', fullGreet); //output: Concatenated String: Hello, Alice!

//split string into array
let strArray = str.trim().split(", ");
console.log('Split:', strArray); //output: Split: ['Hello', 'World!']

//includes method
console.log('Includes "Hello":', str.includes("Hello")); //output: Includes "Hello": true

//startsWith method
console.log('Starts with " Hello":', str.startsWith(" Hello")); //output: Starts with " Hello": true

//endsWith method
console.log('Ends with "World! ":', str.endsWith("World! ")); //output: Ends with "World! ": true

console.log("\n==== End of Demo ====");

console.log(typeof(str)); //output: string

let anotherStr = 'JavaScript is fun!';
console.log(typeof(anotherStr)); //output: string

//strings are immutable
let immutableStr = 'Immutable';
immutableStr[0] = 'i'; //this will not change the string
console.log(immutableStr); //output: Immutable

//concatenation
let concatStr = str.trim() + " " + anotherStr;
console.log('Concatenated String:', concatStr); //output: Concatenated String: Hello, World! JavaScript is fun!

//template literals
let name = "Alice";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting); //output: Hello, Alice! Welcome to JavaScript.