// Errors can be handled in various ways in JavaScript, including try/catch blocks, error objects, and custom error classes.

// Types of error in JS involves compiler errors, runtime errors, and logical errors.


//Compile time errors are errors that occur when the code is being compiled, such as syntax errors or type errors. These errors prevent the code from running at all.

// console.log(32; // This will throw a syntax error because of the missing closing parenthesis



// Runtime errors occur when the code is running, such as trying to access a property of an undefined variable or calling a function that does not exist.

// console.log(x); // This will throw a ReferenceError because x is not defined


// Error Handling in JavaScript can be done using try/catch blocks, which allow you to catch and handle errors gracefully without crashing the program.

// try-catch block

try{
    console.log(x);

    //a

    //b

    //c

    // after error the code will not execute further, it will jump to the catch block
    console.log("This will not be executed");
}

catch(e){
    // This will catch the ReferenceError and log it to the console
    console.log("error caught");
}


//Finally block
// The finally block is executed after the try and catch blocks, regardless of whether an error was thrown or not. It is often used for cleanup operations, such as closing files or releasing resources.


finally{
    console.log("This will always be executed");
}