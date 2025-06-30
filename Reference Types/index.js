// reference types : object, array, string
// they are on stack and heap memory
// for eg let arr = [1, 2, 3, 4, 5];
// here the arr is not a memory location, it is a reference to the memory location where the array is stored. actual data is stored in heap memory.

// Object is a collection of key-value pairs

// let obj = {
//   name: "John",
//   age: 30,
//     city: "New York",
//     height: 180,
//     greet: function() {
//         console.log("Hello, " + this.name);
//     }
// };
// console.log(obj); // { name: 'John' }  
// obj.greet(); // Hello, John

// Array is a collection of values

// --creation of an array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr); // [ 1, 2, 3, 4,

// // --array constructor
// let arr2 = new Array("Peace", 2, true, 4, 5);
// console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// // --accessing elements
// console.log(arr2[0]); // Peace



// --built-in methods
// push, pop, shift, unshift, splice, slice, concat, join, indexOf, lastIndexOf, forEach, map, filter, reduce, find, findIndex
// sort, reverse, includes, some, every, fill, flat, flatMap

// --push
// let arr3 = [1, 2, 3];
// arr3.push(4); // adds 4 to the end of the array
// console.log(arr3); // [ 1, 2, 3, 4 ]

// // --pop
// arr3.pop(); // removes the last element of the array
// console.log(arr3); // [ 1, 2, 3 ]

// // --shift
// arr3.shift(); // removes the first element of the array
// console.log(arr3); // [ 2, 3 ] 

// // --unshift
// arr3.unshift(1); // adds 1 to the beginning of the array
// console.log(arr3); // [ 1, 2, 3 ]

// // --splice
// arr3.splice(1, 1); // removes 1 element from index 1
// // using this method, you can also add elements, remove elements, or replace elements
// // arr3.splice(1, 0, 4); // adds 4 at index 1
// // arr3.splice(1, 1, 4); // replaces the element at index 1 with 4
// console.log(arr3); // [ 1, 3 ]

// // --slice
// let arr4 = [1, 2, 3, 4, 5];
// let slicedArr = arr4.slice(1, 3); // returns a shallow copy of the portion of the array from index 1 to index 3 (not inclusive)
// console.log(slicedArr); // [ 2, 3 ]
// console.log(arr4); // [ 1, 2, 3, 4, 5 ] // original array remains unchanged

// // --map
// // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// // It does not change the original array, but returns a new array with the results of the function.
// // It is often used to transform data in an array, such as applying a function to each element to create a new array of transformed values.
// let arr5 = [1, 2, 3, 4, 5];
// let ansarr = arr5.map((number) => {
//     return number * number; // returns a new array with the square of each element
// })
// console.log(ansarr); // [ 1, 4, 9, 16, 25 ]


// arr5.map((number) => {
//     console.log(number+1);
//  })

// // --filter
// // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// // It does not change the original array, but returns a new array with the elements that satisfy the condition specified in the function.
// // It is often used to extract a subset of elements from an array
// // based on a specific condition, such as filtering out elements that do not meet certain criteria.


// let arr6 = [1, 2, 3, 4, 5];
// let evenArray = arr6.filter((number) => {
//     if(number % 2 === 0) {
//         return true;
//     }
//     return false;
// })

// console.log(evenArray); 

// // [ 2, 4 ] // returns a new array with only even numbers

// let arr7 = ["Peace", "Love", 32, 122];
// let ans7 = arr7.filter((value)=>{
//     if(typeof value === "string") {
//         return true; // returns only string values
//     }
//     return false;
// })

// console.log(ans7); // [ 'Peace', 'Love' ]

// // --reduce
// // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// // it has accumulator and current value as parameters.
// // if the accumulator is not provided, the first element of the array is used as the initial value. and the current value starts from the second element.

// // if the accumulator is provided, the first element of the array is used as the initial value
// // and the current value starts from the first element.

// let arr8 = [1, 2, 3, 4, 5];

// let ans8 = arr8.reduce((acc, curr)=>{
//     return acc + curr;
// }, 0); // here 0 is the initial value of the accumulator
// console.log(ans8); // 15 // returns the sum of all elements in the array

// // --sort
// // The sort() method sorts the elements of an array in place and returns the sorted array.
// // The default sort order is according to string Unicode code points.
// // If you want to sort numbers, you need to provide a compare function that defines the sorting order.
// // The compare function takes two arguments and returns a negative, zero, or positive value depending
// // on whether the first argument is less than, equal to, or greater than the second argument   



// let arr9 = [5, 3, 8, 1, 2];
// // arr9.sort();

// // console.log(arr9); // [ 1, 2, 3, 5, 8 ] // sorts the array in ascending order by default

// // --using compare function
// // arr9.sort((a, b) => {
// //     return a - b; // sorts the array in ascending order
// // });

// // console.log(arr9); // [ 1, 2, 3, 5, 8 ] // sorts the array in ascending order

// // in descending order
// arr9.sort((a, b) => {
//     return b - a; // sorts the array in descending order
// });
// console.log(arr9); // [ 8, 5, 3, 2, 1 ] // sorts the array in descending order

// // --indexOf
// // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// let arr10 = [1, 2, 3, 4, 5];
// console.log(arr10.indexOf(3)); // 2 // returns the index of the first occurrence of the element 3
// console.log(arr10.indexOf(6)); // -1 // returns -1 if the element is not found in the array

// // --find
// // The find() method returns the value of the first element in the array that satisfies the provided testing function.
// // If no values satisfy the testing function, undefined is returned.    

// let arr11 = [1, 2, 3, 4, 5];
// let found = arr11.find((number) => {
//     return number > 3; // returns the first element that is greater than 3
// });
// console.log(found); // 4 // returns the first element that is greater than 3    


// for each

// // The forEach() method executes a provided function once for each array element.
// // It does not return a new array, but instead performs an action for each element in the array.
// // It is often used for iterating over an array to perform side effects, such

// let arr = [1, 2, 3, 4, 5];
// let length = arr.length;
// console.log("Length of the array: ", length); // 5
// arr.forEach((value, index)=> {
//     console.log("Number: ", value, "Index: ", index)
// })


// --for in 
// The for...in loop is used to iterate over the enumerable properties of an object.
// It is not recommended to use for...in with arrays, as it iterates over all enumerable properties, including those inherited from the prototype chain.
// It is primarily used for objects, not arrays 


// for (let key in obj){
//     console.log(key, " ", obj[key]);
// }


// --for of
// The for...of loop is used to iterate over iterable objects, such as arrays, strings, and other collections.
// It provides a simpler syntax for iterating over the values of an iterable object

// let arr2 = [1, 2, 3, 4, 5];

// for(let value of arr2){
//     console.log("Value: ", value);
// }

// The for...of loop iterates over the values of the array, not the indices


// --arrays with functions

// let arr3 = [1, 2, 3, 4, 5];

// function getSum(arr3){
//     let len = arr3.length;
//     let sum = 0;
//     for(let index = 0; index < len; index++){
//         sum = sum + arr3[index]; //here we are accessing the elements of the array using the index
//     }
//     return sum;
// }

// let totalSum = getSum(arr3);
// console.log("Total Sum: ", totalSum);


// --using forEach with functions

// let arr = [1, 2, 3, 4, 5];
// function getSum(arr) {
//     let sum = 0;
// arr.forEach((value) => {
//     sum+= value; 
        
// });
// return sum;

// }

// let ans = getSum(arr);
// console.log("Total Sum: ", ans); // Total Sum: 15