// block of code performs a specific function

// function funciton_name("Parameters"){
//     // code to be executed
// }

// function saymyname(){
//     console.log("My name is John Doe");
// }

// --to use function we need to call it
// saymyname();


// --using parameters in functions

// function printnumber(num){
//     for (let i =0; i<= num; i++){
//         console.log(i);
//     }
// }

// printnumber(100);


// --function to get average of numbers

// function getAverage(num1, num2, num3){
//     let sum = num1 + num2 + num3;
//     let average = sum / 3;
//     console.log("The average is: " , average);
// }

// getAverage(10, 20, 30);


// --return functions

// function getsum(a,b,c){
//     let sum = a + b + c;
//     return sum; // returns the value of sum , without return it will be undefined
// }

// // to get the value returned by the function, we need to store it in a variable
// let result = getsum(10, 20, 30);
// console.log("The sum is: ", result);



// function getMyName(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     return fullName; // anything written below return will not be executed
//     // console.log("My name is: ", fullName); // this will not be executed
// }

// let fullName = getMyName("John", "Doe");
// console.log(fullName);


// -- another example of return function

// function getMultuplication(a,b){
//     return a*b;
// }

// console.log(getMultuplication(10, 20)); // 200


// --using const and let in functions

// let getMultuplication = function(a, b) {
//     return a * b;
// }
// console.log(getMultuplication(10, 20)); // 200

// using const to define a function
// const getMultuplication = function(a, b) {
//     return a * b;
// }
// console.log(getMultuplication(10, 20)); // 200

//  it is better to use const for functions as it prevents reassignment
// if we use let, we can reassign the function to another value


// --arrow function
// let getExp = (x,y) =>{
//     let ans = x**y;
//     return ans;
// }

// console.log(getExp(2, 3)); // 8