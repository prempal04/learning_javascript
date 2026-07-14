// Variable Scoping in JavaScript refers to the accessibility of variables in different parts of your code. Variables can be declared in different scopes, such as global scope, function scope, and block scope. Understanding variable scoping is crucial for managing variable visibility and avoiding conflicts.

var age = 15; // Global scope

console.log("Global scope:", age); // 15

{
    console.log("Block scope before declaration:", age); // 15
} 
if(true){
    console.log(age);
}
for(let i = 0; i < 5; i++) {
    console.log(age);
}

function displayAge() {
    console.log("Function scope:", age); // 15
}       
displayAge();



//Function Scope

function myFunction() {
    var localVar = "I am local"; // Local scope
    console.log("Inside function:", localVar); // "I am local"
}

myFunction();

// console.log("Outside function:", localVar); // ReferenceError: localVar is not defined

//Block Scope 

{
    let wt = 100;
    const er = 100;
}

console.log("Block scope after declaration:", wt); // ReferenceError: wt is not defined
console.log("Block scope after declaration:", er); // ReferenceError: er is not defined

// Lexical Scope

function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log("Inside inner function:", outerVar); // Accessing outerVar from outerFunction
    }

    innerFunction();
}

outerFunction(); // Output: Inside inner function: I am from outer function

//Temporal Dead Zone (TDZ) refers to the time between the entering of a block and the point where a variable is declared. During this period, accessing the variable will result in a ReferenceError.

{
    // console.log("Accessing before declaration:", tempVar); // ReferenceError: Cannot access 'tempVar' before initialization
    let tempVar = "I am in TDZ";
    console.log("Accessing after declaration:", tempVar); // "I am in TDZ"
}   

