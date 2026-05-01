let students = ["Raman", "Suman", "Ankit", "Pooja", "Rahul"];

// length of the array
console.log("Length of the array: ", students.length); // 5

// Accessing the elements 
console.log("First student: ", students[0]); // Raman
console.log("Second student: ", students[1]); // Suman

// Creation of an Array

let numbers = [1, 2, 3, 4, 5];
let arr = []; // empty array
let info = ["Raman", 25, true, "JavaScript"]; //mixed array

// Arrays are mutable in JS. we can change the elements of the array but we cannot change the array itself.

students[0] = "Raman Kumar"; // changing the first element of the array
console.log("Updated students array: ", students); 

// Adding elements to the array

students[5] = "Anjali"; // adding an element at index 5
console.log("Updated students array: ", students);


// Array Methods

// Push method -- it adds one or more elements to the end of an array and returns the new length of the array.

students.push("Ram"); // Adds Ram to the end of the array
console.log("Updated students array: ", students);


// Pop method -- it removes the last element from an array and returns that element. This method changes the length of the array.

students.pop(); // removes the last element of the array
console.log("Updated students array: ", students);


// Unshift method -- it adds one or more elements to the beginning of an array and returns the new length of the array.

students.unshift("Anjali"); // Adds Anjali to the beginning of the array
console.log("Updated students array: ", students);


// Shift method -- it removes the first element from an array and returns that removed element. This method changes the length of the array.

students.shift(); // removes the first element of the array
console.log("Updated students array: ", students);


//indexOf method -- it returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log("Index of Ankit: ", students.indexOf("Ankit")); // 2
console.log("Index of Rahul: ", students.indexOf("Rahul")); // 4


// includes method -- it determines whether an array includes a certain value among its entries, returning true or false as appropriate.

console.log("Does the students array include Ankit? ", students.includes("Ankit")); // true
console.log("Does the students array include Rahul? ", students.includes("Rahul")); // true
console.log("Does the students array include Ram? ", students.includes("Ram")); // false


// concat method -- it is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

 let arr1 = [1, 2, 3];
 let arr2 = [4, 5, 6];
 let mergedArr = arr1.concat(arr2);
console.log("Merged array: ", mergedArr); // [1, 2, 3, 4, 5, 6]


// reverse method -- it reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

let arr3 = [1, 2, 3, 4, 5];
arr3.reverse();
console.log("Reversed array: ", arr3); // [5, 4, 3, 2, 1]


// slice method -- it returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

let arr4 = [1, 2, 3, 4, 5];
let slicedArr = arr4.slice(1, 4);
console.log("Sliced array: ", slicedArr); // [2, 3, 4]


// Splice method -- it changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// splice(start, deleteCount, item1, item2, ...)
// start -- The index at which to start changing the array.
// deleteCount -- An integer indicating the number of elements in the array to remove from start.
// item1, item2, ... -- The elements to add to the array, beginning from start. If you don't specify any elements, splice() will only remove elements from the array.

let arr5 = [1, 2, 3, 4, 5];
arr5.splice(2, 1); // removes 1 element at index 2
console.log("Updated array after splice: ", arr5); // [1, 2, 4, 5]

arr5.splice(2, 0, 3); // adds 3 at index 2
console.log("Updated array after splice: ", arr5); // [1, 2, 3, 4, 5]



// sort method -- it sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

let arr6 = [3, 1, 4, 2, 5];
arr6.sort();
console.log("Sorted array: ", arr6); // [1, 2, 3, 4, 5]




// Array reference are the address of the array in the memory. when we assign an array to another variable, it creates a reference to the same array in the memory. so when we change the array using one variable, it changes the array for all the variables that reference to that array.

//[1] == [1] // false -- because they are different arrays in the memory
//[1] === [1] // false -- because they are different arrays in the memory


let arr7 = [1, 2, 3];

let arrCopy = arr7; // arrCopy is a reference to the same array in the memory as arr7

arrCopy.push(4); // changes the array that arrCopy references to

console.log("arr7: ", arr7);



// Constant arrays -- we can change the elements of a constant array but we cannot change the array itself.

const arr8 = [1, 2, 3];

arr8.push(4);   // we can change the elements of the array
console.log("arr8: ", arr8);

// arr8 = [5, 6, 7]; // we cannot change the array itself



// Nested arrays -- an array can contain another array as an element. This is called a nested array.

let nestedArr = [1, 2, [3, 4], 5];
console.log("Nested array: ", nestedArr);   


// Multidimensional arrays -- an array can contain another array as an element, and that array can also contain another array as an element, and so on. This is called a multidimensional array.

// accessing the elements of a multidimensional array


let multiArr = [[1, 2], [3, 4, [5,6]], [5, 6]];
console.log("First element of the first array: ", multiArr[0][0]); // 1
console.log("Second element of the second array: ", multiArr[1][2]); // [5,6]
console.log("First element of the third array: ", multiArr[2][0]);  // 5
console.log("First element of the nested array: ", multiArr[1][2][0]); // 5 


