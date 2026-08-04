// Function in JS is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it). Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript can be defined using the `function` keyword, followed by a name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

// Example of a simple function
function greet(name) {
    return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("Alice")); // Output: Hello, Alice!

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

// Calling the function
console.log(add(5, 3)); // Output: 8

// Function with loop 

function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// Calling the function
printNumbers(); // Output: 1 2 3 4 5

// Functions with arguments

function greetUser(name, age) { 
    return `Hello, ${name}! You are ${age} years old.`;
}

// Calling the function
console.log(greetUser("Bob", 25)); // Output: Hello, Bob! You are 25 years old.


// return statement in function

function multiply(x, y) {
    return x * y; // The return statement ends function execution and specifies a value to be returned to the function caller.
}

// Calling the function
console.log(multiply(4, 5)); // Output: 20


// calculator using methods

const Calculator = {

    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
}


// this keyword in function

const student = {
    name: "John",
    age: 20, 
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }   
}

student.greet(); // Output: Hello, my name is John and I am 20 years old.


// arrow functions are a more concise syntax for writing functions in JavaScript. They are often used for shorter functions and do not have their own `this` context.

// Example of an arrow function
const square = (x) => {
    return x * x;
}

// Calling the arrow function
console.log(square(4)); // Output: 16

const sum = (a,b) => {
    console.log(a+b);
}

sum(2,24);

// implicit return in arrow function

const multiplyArrow = (x, y) => x * y; // Implicit return

// Calling the arrow function
console.log(multiplyArrow(3, 7)); // Output: 21


// setTimeOut Function is a built-in JavaScript function that allows you to execute a piece of code after a specified delay (in milliseconds). It takes two arguments: a callback function to be executed and the delay time in milliseconds.

// Example of using setTimeout
setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000); // 2000 milliseconds = 2 seconds


// setInterval Function is a built-in JavaScript function that allows you to execute a piece of code repeatedly at specified intervals (in milliseconds). It takes two arguments: a callback function to be executed and the interval time in milliseconds.


let id = setInterval(() => {
    console.log("This message is displayed every 3 seconds.");
}, 3000); // 3000 milliseconds = 3 seconds

// clear Interval Function is a built-in JavaScript function that allows you to stop the execution of a setInterval function. It takes one argument: the interval ID returned by the setInterval function when it was called.

clearInterval(id);

// this function in arrow function 

const person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    greetArrow: () => {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    getinfo1: function() {
        setTimeout(() => {
            console.log(this); // PERSON OBJECT
        }, 1000);
    },
    getinfo2: function(){
        setTimeout(function() {
            console.log(this); // WINDOW
        }, 1000);
    }
};

person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person.greetArrow(); // Output: Hello, my name is undefined and I am undefined years old. (because arrow functions do not have their own `this` context)



// default parameters in function

function sum1 (a,b = 2){
    return a + b;
}

console.log(sum1(3)); // Output: 5 (b takes the default value of 2)

// default parameters can also be used with arrow functions

const sum2 = (a, b = 2) => a + b;

console.log(sum2(3)); // Output: 5 (b takes the default value of 2)

// also if we define a = 2 and b, then a will take the default value of 2 and b will be undefined

function sum3 (a = 2, b){
    return a + b;
}

console.log(sum3(undefined, 3)); // Output: 5 (a takes the default value of 2 and b is 3)


//spread operator in function

let arr = [1, 2, 3];

function sum4(a, b, c) {
    return a + b + c;
}

console.log(sum4(...arr)); // Output: 6 (spread operator expands the array into individual elements)

// spread with array literals

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArr = [...arr1, ...arr2]; // combines the two arrays into one
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// spread with object literals

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let combinedObj = { ...obj1, ...obj2 }; // combines the two objects into one
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// rest operator in function

function sum5(...numbers) { // rest operator collects all arguments into an array
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum5(1, 2, 3, 4)); // Output: 10 (sum of all numbers)


// Destructuring in function

// Destructuring allows us to unpack values from arrays or properties from objects into distinct variables. It can be used in function parameters to extract values directly.

let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

let winner = names[0];
let runnerUp = names[1];
let secondRunnerUp = names[2];


let[winner, runnerUp, secondRunnerUp, ...others] = names; // destructuring assignment

console.log(winner); // Output: Alice
console.log(runnerUp); // Output: Bob
console.log(secondRunnerUp); // Output: Charlie
console.log(others); // Output: [ 'David', 'Eve' ] (rest operator collects the remaining elements into an array)    