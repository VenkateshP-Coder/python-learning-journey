//arrays are collection of items
let fruits = ['apple', 'banana', 'cherry'];

//accessing array elements
console.log(fruits[0]); //output: apple

//adding elements to an array
fruits.push('date');
console.log(fruits); //output: ['apple', 'banana', 'cherry', 'date']

//adding elements at the beginning
fruits.unshift('avocado');
console.log(fruits); //output: ['avocado', 'apple', 'banana', 'cherry', 'date']

//updating elements in an array
fruits[1] = 'blueberry';
console.log(fruits); //output: ['apple', 'blueberry', 'cherry', 'date']

//removing elements from an array
fruits.pop();
console.log(fruits); //output: ['apple', 'banana', 'cherry']

//array length
console.log(fruits.length); //output: 3

//looping through an array
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//using forEach method
fruits.forEach(function(fruit) {
    console.log(fruit);
});

//finding an element in an array
let index = fruits.indexOf('banana');
console.log('Index of banana:', index); //output: Index of banana: 1

//checking if an element exists
let hasCherry = fruits.includes('cherry');
console.log('Contains cherry:', hasCherry); //output: Contains cherry: true

console.log("\n==== End of Demo ====");

console.log(typeof(fruits)); //output: object

let numbers = [1, 2, 3, 4, 5];
console.log(typeof(numbers)); //output: object

let mixedArray = [1, 'two', true, null, undefined, {name: 'Alice'}];
console.log(typeof(mixedArray)); //output: object

//arrays are mutable
mixedArray[0] = 10;
console.log(mixedArray); //output: [10, 'two', true, null, undefined, {name: 'Alice'}]

//length of an array
console.log('Length of mixedArray:', mixedArray.length); //output: Length of mixedArray: 6

//nested arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Element at (1,2):', matrix[1][2]); //output: Element at (1,2): 6

//array methods
let slicedFruits = fruits.slice(0, 2);
console.log('Sliced fruits:', slicedFruits); //output: Sliced fruits: ['apple', 'banana']

let concatenatedArray = fruits.concat(['date', 'elderberry']);
console.log('Concatenated array:', concatenatedArray); //output: Concatenated array: ['apple', 'banana', 'cherry', 'date', 'elderberry']

let reversedFruits = fruits.reverse();
console.log('Reversed fruits:', reversedFruits); //output: Reversed fruits: ['cherry', 'banana', 'apple']

let sortedFruits = fruits.sort();
console.log('Sorted fruits:', sortedFruits); //output: Sorted fruits: ['apple', 'banana', 'cherry']

//mapping an array
let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log('Uppercase fruits:', upperFruits); //output: Uppercase fruits: ['APPLE', 'BANANA', 'CHERRY']

//need mapping example for numbers
let numbersArray = [1, 2, 3, 4, 5];
//this example squares each number in the array
let squaredNumbers = numbersArray.map(function(number) {
    return number * number;
});
console.log('Squared numbers:', squaredNumbers); //output: Squared numbers: [1, 4, 9, 16, 25]

//filtering an array
//this example filters fruits with more than 5 letters
//same example using for loop
for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].length > 5) {
        console.log('Fruit with more than 5 letters:', fruits[i]);
    }
}

//using filter method
let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});
console.log('Fruits with more than 5 letters:', longFruits); //output: Fruits with more than 5 letters: ['banana', 'cherry']

//reducing an array this example calculates total length of all fruit names
    let sumLength = 0;
    for (let j = 0; j < fruits.length; j++) {
        for (let k = 0; k < fruits[j].length; k++) {
            // inner loop does nothing, just iterates
             sumLength++;
        }

    }
    console.log('Length of', fruits, ':', sumLength);
console.log(fruits);
let totalLength = fruits.reduce(function(accumulator, fruit) {
    return accumulator + fruit.length;
}, 0);
console.log('Total length of all fruit names:', totalLength); //output: Total length of all fruit names: 16


//flattening an array
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2);
console.log('Flattened array:', flattenedArray); //output: Flattened array: [1, 2, 3, 4, 5, 6]

//spread operator with arrays
let moreFruits = ['fig', 'grape'];
let allFruits = [...fruits, ...moreFruits];
console.log('All fruits:', allFruits); //output: All fruits: ['apple', 'banana', 'cherry', 'fig', 'grape']

//destructuring arrays
let [firstFruit, secondFruit] = fruits;
console.log('First fruit:', firstFruit); //output: First fruit: apple
console.log('Second fruit:', secondFruit); //output: Second fruit: banana

//array from a string
let str = "hello";
let charArray = Array.from(str);
console.log('Character array:', charArray); //output: Character array: ['h', 'e', 'l', 'l', 'o']

//checking if a variable is an array
console.log('Is fruits an array?', Array.isArray(fruits)); //output: Is fruits an array? true
console.log('Is mixedArray an array?', Array.isArray(mixedArray)); //output: Is mixedArray an array? true
console.log('Is pi an array?', Array.isArray(pi)); //output: Is pi an array? false

console.log("\n==== End of Demo ====");