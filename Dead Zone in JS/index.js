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



//Temporal Dead Zone 


console.log(marks);
console.log("Peace");
console.log("Peace");
console.log("Peace");
const marks = 100;

// Here From Line 50 ti Line 54, the variable 'marks' is in the Temporal Dead Zone (TDZ) because it is declared with 'const' and is not initialized yet. Accessing it before its declaration results in a ReferenceError.