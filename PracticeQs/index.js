// from the given start state of an array .. change it to final form using methods 


let start = ['jan', 'july', 'mar', 'aug' ];

let final = ['jul', 'june', 'mar', 'aug']

start.shift(); // removes 'jan' from the beginning of the array
start.shift(); // removes 'july' from the beginning of the array

start.unshift('june'); // adds 'june' to the beginning of the array
start.unshift('jul'); // adds 'jul' to the beginning of the array

console.log('start array:', start); // [ 'jul', 'june', 'mar', 'aug' ]



// change start to the final form using splice method

let start2 = ['jan', 'july', 'mar', 'aug' ];
let final2 = ['jul', 'june', 'mar', 'aug']


start2.splice(0,2,'jul','june');

console.log('start2 array:', start2); // [ 'jul', 'june', 'mar', 'aug' ]



// returnt the index of the javascript from the given array if it was reversed

let arr = ['python', 'java', 'javascript', 'c++'];
arr.reverse();
console.log(arr.indexOf("javascript"));



// tic tac toe game using arrays


let board = [['X', null, 'O'],[null, 'X', null],['O', null, 'X']];

board[0][1] = 'O';
console.log(board);

