//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

{
    // Example of function hoisting
    greet();
    function greet() {
        console.log("Hello, World!");
    }
    greet(); // Output: Hello, World!
    
}


// Variable Hoisting is the behavior in JavaScript where variable declarations are moved to the top of their containing scope. However, only the declaration is hoisted, not the initialization. This means that if you try to access a variable before it is declared, it will be `undefined`.


{
    console.log(naame); // Output: undefined
    var naame = "John Doe";
    console.log(naame); // Output: John Doe

    // Note: If you use `let` or `const`, the variable will not be hoisted in the same way and will throw a ReferenceError if accessed before declaration.
    // console.log(age); // Uncaught ReferenceError: Cannot access 'age' before initialization
    let age = 30;
    console.log(age); // Output: 30
}


// Function expressions are not hoisted in the same way as function declarations. If you try to call a function expression before it is defined, you will get an error.

// Example of function expression
{
    // sayHello(); //Reference Error: Cannot access 'sayHello' before initialization
    let sayHello = function() {
        console.log("Hello, Function Expression!");
    }
}


// let and const declarations are also not hoisted in the same way as var declarations. If you try to access a variable declared with let or const before its declaration, you will get a ReferenceError.


// Class Hoisting is similar to function hoisting. Class declarations are hoisted, but you cannot access the class before it is declared.


// const object = new Human(); // ReferenceError: Cannot access 'Human' before initialization
class Human {

}

const object = new Human(); // This works because class declarations are hoisted


// Function Call Stack 

// LIFO // Last In First Out based structure

// let greet = function() {
//     console.log("Hello, World!");
// }

// greet();



function greetMe(greet, FullName){
    console.log("Hello", FullName); 
    greet();   
}

function greet(){
    console.log("Greeting for the day!");
}

greetMe(greet, "John Doe"); // Output: Hello John Doe


// function solve(number){
//     return function(number){
//         return number * number;
//     }
// }

// let ans = solve(5);

// let finalAns = ans(10);

// console.log(finalAns); // Output: 100



// const arr = [
//     function(a,b){
//         return a + b;
//     },
//     function(a,b){
//         return a - b;
//     },
//     function(a,b){
//         return a * b;
//     },
// ]

// let first = arr[2];
// let ans = first(100, 20);
// console.log(ans); // Output: 30


let obj = {
    age: 25,
    wt: 50,
    ht: 180,
    greet: ()   => {
        console.log("Hello, I am an object!");
    }
}

console.log(obj.age); // Output: 25
console.log(obj.wt); // Output: 50
console.log(obj.ht); // Output: 180
obj.greet(); // Output: Hello, I am an object!  
