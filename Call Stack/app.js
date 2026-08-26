// call stack,  breakpoints & debugging options
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}
three();



// JS in single threaded 

let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a + b);


// call backs

setTimeout(function () {
    console.log("Hello");
}, 2000);

console.log("done...");


// call back hell


let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    })
}

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("purple", 1000, () => {
//                     changeColor("black", 1000);
//                 });
//             });
//         });
//     });
// });


// this nesting of callbacks is called callback hell, which is hard to read and maintain. To avoid this, we can use promises and async/await in modern JavaScript.


// promises -- these are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.


// async functions -- these are functions that are declared with the async keyword, and they always return a promise. The await keyword can only be used inside an async function. It makes JavaScript wait until the promise returns a result.

async function greet() {

    return "hello world!"
    
}



// await keyword -- it pauses the execution of its surroundings async functions until the promise is settled

