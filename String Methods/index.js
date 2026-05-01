

//string.trim()  // removes the white spaces from the start and end of the string

let msg = '   Hello World   ';

console.log(msg.trim());


// Strings are immutable in JS. we cannot change the string but we can create a new string by using the existing string.



console.log(msg.toUpperCase())  // converts the string to uppercase
console.log(msg.toLowerCase())  // converts the string to lowercase

let name = 'Raman';
console.log(name.toUpperCase());
console.log(name.toLowerCase());


// String methods with arguments -- arguments are the values we pass to the method to perform a specific task.

let str = 'Hello World';

console.log(str.indexOf('o'));  // returns the index of the first occurrence of the specified value in a string 


// Method Chaining -- we can chain multiple methods together to perform a series of operations on a string.

let str2 = '   Hello World   ';

console.log(str2.trim().toUpperCase());


// Slice method -- it returns a portion of a string based on the specified start and end indices.

let str3 = 'Hello World';

console.log(str3.slice(0, 5)); // returns 'Hello' -- it starts from index 0 and ends at index 5 (not inclusive)
console.log(str3.slice(6)); // returns 'World' -- it starts from index 6 and goes till the end of the string
console.log(str3.slice(-2)); // returns 'ld' -- it starts from the end of the string and goes backwards by 2 characters


// Replace method -- it returns a new string with some or all matches of a pattern replaced by a replacement.

let str4 = 'Hello World';

console.log(str4.replace('World', 'JavaScript')); // returns 'Hello JavaScript' -- it replaces 'World' with 'JavaScript' only the first occurrence of 'World'

// Repeat method -- it returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
let str5 = 'Hello ';
console.log(str5.repeat(3)); // returns 'Hello Hello Hello ' -- it repeats the string 3 times

