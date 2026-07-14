// Write a JS program to delete all occurrences of element 'num' in a given array 

arr = [1,2,3,4,5,6,2,3]
let num = 2;

for(let i = 0; i < arr.length; i++){

    if(arr[i] == 2){
        arr.splice(i,1);
    }
}
console.log(arr);


// write JS program to find the no of digitws in a number

let number = 12345;
let count = 0;

while(number > 0){
    number = Math.floor(number/10);
    count++;
}
console.log("Number of digits: ", count);

// write a JS program to find the sum of digits in a number

let num2 = 12345;
let sum = 0;

while(num2 > 0){
    let digit = num2 % 10;
    sum += digit;
    num2 = Math.floor(num2/10);
}
console.log("Sum of digits: ", sum);


// print the factorial of a number

let num3 = 5;
let factorial = 1;

for(let i = 1; i <= num3; i++){
    factorial *= i;
}
console.log("Factorial: ", factorial);

// find the largest number in an array

let arr2 = [1, 2, 3, 4, 5];
let largest = arr2[0];

for(let i = 1; i < arr2.length; i++){
    if(arr2[i] > largest){
        largest = arr2[i];
    }
}
console.log("Largest number: ", largest);