// what will be the output of the following code?

let greet = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet); // Output: namaste
    function innerGreet(){
        console.log(greet); // Output: namaste
    }
}

console.log(greet); // Output: hello
changeGreet(); // Output: namaste


// write a js function that returns array elements larger than a number

function getLargerElements(arr, num) {
    let largerElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            largerElements.push(arr[i]);
        }
    }
    return largerElements;
}


// write a js function that extract unique elements from a string

let str = "abcdabcdefgggh"

function extractUniqueElements(str) {
    let uniqueElements = "";
    for (let i = 0; i < str.length; i++){
        if (uniqueElements.indexOf(str[i]) === -1) {
            uniqueElements += str[i];
        }
    }
    return uniqueElements;
}


// write a js function that accepts a list of country names as input and returns the longest country name as output

let countries = ["India", "United States of America", "Australia", "Germany", "Brazil"];

function getLongestCountryName(countries) {
    let longestCountry = "";
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longestCountry.length) {
            longestCountry = countries[i];
        }
    }
    return longestCountry;
}

console.log(getLongestCountryName(countries)); // Output: United States of America


// write a js function to count the number of vowels in a string

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World")); // Output: 3


// write a js function to generate a random number within a range 

let start = 1;
let end = 100;

function generateRandom (start, end){
    let diff = end-start;

    return Math.floor(Math.random() * diff) + start;
}


// write an arrow function that return the square of a number 

const square = (num) => (num*num);

console.log(square(35));

// write a function that print "hello world" 5 times at intervals of 2s each

// let intervalId = setInterval(()=>{
//     console.log("hello world");
// }, 2000);

// setTimeout(()=>{
//     clearInterval(intervalId);
//     console.log(`clear interval ran after 5 prints of helloworld`);
    
// }, 10001);


// write an arrow function named arrayAverage that accepts an array of numnbers and returns the average of those numbers

let arr = [1,2,3,4,5];

const arrayAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(arrayAverage(arr)); // Output: 3


// write an arrow function named isEven that takes a single number as argument and return if it is even or not;

const isEven = (num) => num%2 === 0;

console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false

// what is the output of this code 

const  object = {
    message: "Hello, World!",
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000); // Output: undefined


// what is the output of this code

let length = 4;

function callback(){
    console.log(this.length);
}

const object2 = {
    length: 5,
    method(callback){
        callback();
    }
};

object2.method(callback, 1, 2); // Output: 4

// in the above code, the `this` context inside the `callback` function refers to the `object2` because the `method` function is called on `object2` and passes the `callback` function as an argument.