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