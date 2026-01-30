console.log("==== JavaScript Basics Demo ====\n")

// Variable declarations and logging to console var, let, const can be used
const greeting = "Hello, World!"
console.log(greeting)

const number = 42
console.log("The answer to life, the universe, and everything is:", number)

const isJavaScriptFun = true
console.log("Is JavaScript fun?", isJavaScriptFun)

console.log("\n==== End of Demo ====")

var unusedVariable = "This variable is declared but not used"

let a = 10
let b = 20
let sum = a + b
console.log("The sum of", a, "and", b, "is:", sum)

const pi = 3.14159
console.log("The value of pi is approximately:", pi)

const isRaining = false
console.log("Is it raining today?", isRaining)

console.log("\n==== End of Demo ====")
console.log(typeof(a))

let c = true
console.log(typeof(c))

let d = "Sample String"
console.log(typeof(d))

let e = 3.14
console.log(typeof(e))

let f = 100
console.log(typeof(f))

let g = null
console.log(typeof(g))

let h = undefined
console.log(typeof(h))

let i = {name: "Alice", age: 30}
console.log(typeof(i))

//diff between var, let, const
var x = 1
let y = 2
const z = 3

x = 10 // var can be reassigned
y = 20 // let can be reassigned
//z = 30 // const cannot be reassigned, this will throw an error1
console.log(x, y, z)

//use const when variable value should not change
const birthYear = 1990
console.log("Birth Year:", birthYear)

//use let when variable value can change
let currentYear = 2024
console.log("Current Year:", currentYear)
currentYear = 2025
console.log("Updated Current Year:", currentYear)
//✅ Always prefer const - makes code more predictable
//✅ Use let when you need to reassign
//❌ Never use var - it's outdated and causes bugs
//🔒 Block scope (let/const) is safer than function scope (var)
//📦 const doesn't mean immutable - you can modify object/array contents
//avoid using var to prevent scope issues
//when to use var then?
//use var in global scope or function scope when necessary
function exampleFunction() {
    var localVar = "I am local to this function"
    console.log(localVar)
}
exampleFunction()
//console.log(localVar) // This will throw an error since localVar is not defined outside the function