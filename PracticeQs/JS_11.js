// check if all numbers in our array are multiples of 10 or not 

let numbers = [10, 20, 30, 40, 50];

const multiplesofTen = numbers.every(element => (element %10 == 0));
console.log("Are all numbers multiples of 10? ", multiplesofTen);


// create a function to find the min numeber in an array

let min = numbers.reduce((min, el) => {
    if (min < el){
        return min;
    } else{
        return el;
    }
    });
console.log("Minimum number in the array: ", min);



// square and sum the array elements using the arrow function and then find the average of the array


let arr15 = [1, 2, 3, 4, 5];

const square = arr15.map((el) => el * el);
console.log("Square of the array elements: ", square);

let sum = square.reduce((acc, el) => acc + el, 0);
console.log("Sum of the squared elements: ", sum);

let average = sum / arr15.length;
console.log("Average of the squared elements: ", average);


// create a new array using the map function whose each element is equal the the original elemetn +5;

let arr16 = [1, 2, 3, 4, 5];

const newArray = arr16.map((el) => el+5);
console.log("New array with each element incremented by 5: ", newArray);


// create a new array whose elements are in uppercase of words present in the original array

let arr17 = ["hello", "world", "javascript", "functions"];

const upperCaseArray = arr17.map((el)=> el.toUpperCase());
console.log("New array with uppercase words: ", upperCaseArray);

// write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments . the function should return a new array with the original array values and all of the additional arguments doubled.


const doubleAndReturnArgs = (arr, ...args) => {
    const doubledArgs = args.map((el) => el * 2);
    return [...arr, ...doubledArgs];
};

console.log(doubleAndReturnArgs([1, 2, 3], 4, 5)); // Output: [1, 2, 3, 8, 10]


// write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of both the first object and second object

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4})); // Output: {a: 1, b: 2, c: 3, d: 4}