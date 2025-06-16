// <<operators & conditionals >>

// + addition, - subtraction, * multiplication , / division , % modulus, ** exponents;

// arithmetic operator

// let a = 10;
// let b = 23;

// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);
// console.log(a**b);


// Unary Operations

// pre increment --> ++a phele increment and then use;
// post increment --> console.log(a++) pehle use and then increment;
// same for pre/post decrement;

// Assignment operator

// let a = 5;
// a = a + 10;
// a+=10;
// a*=3
// here = is the assignment operator


// Comparison Operator

// console.log(10>5);
// console.log(10<5);
// console.log(10>=5);
// console.log(10<=5);
// console.log(10==5);
// console.log(10!=5);
// console.log(10===5); value and type of data strictly equal
// console.log(10!==5); value and type of data strictly not equal


// console.log("5"==5);  //loose equality.. data type is not same
// console.log("5"===5);   //strict equality 





// <<Ternary Operator>>


// let age = 25;
// let status1 = (age > 18) ? 'I can vote' : 'I cannot Vote' ;

// console.log(status1);





// <<Logical Operator>>

//  AND && , OR || , NOT ! ;


// let ans1 = (true || false || true);

// console.log(ans1);

// let ans2 = (true && false && true);

// console.log(ans2);

// let ans3 = !(false);

// console.log(ans3);





// <<Working with Non-Booleans>>

// --falsy : undefined, null, 0, false, Not a number (NaN), 'empty string' ;

// truthy: anything which is not a falsy;


// console.log(false || 7 || 11 || 18); //here short circuting is applied;





// <<bitwise operators>>

// console.log(2 & 5);
// console.log(2 | 5);
// console.log(~(2 & 5)); //MSB is 1 hence it is a negative number .. 2's compliment  (1s compliment + 1) signed numbers; bit level flipping;
// console.log(2 ^ 5);

// console.log(5 << 1); //left shift (multiplied with 2); 5 * 2^1;
// console.log(10 >> 1); //right shift (divided with 2); 10 / 2^1;






// <<If else statements (conditionals)>>

// let age = 18;

// if (age >= 18){
//     console.log('vote');
// }
// else {
//     console.log('Cannot Vote');
// }



//--else if


// let number = 5;

// if(number == 1){
//     console.log('A');
// }
// else if(number == 2){
//     console.log('B');
// }
// else if(number == 3){
//     console.log('C');
// }
// else if(number == 4){
//     console.log('D');
// }
// else if(number == 5){
//     console.log('E');
// }



// -- nested else if


// let number = 5;
// let age = 24;

// if(number == 1){
//     console.log('A');
// }
// else if(number == 2){
//     console.log('B');
// }
// else if(number == 3){
//     console.log('C');
// }
// else if(number == 4){
//     console.log('D');
// }
// else if(number == 5){
//     if(age >= 18){
//         console.log('I can Vote');
//     }
//     console.log('E');
// }



// -- switch case


// let num = 3;

// switch(num){
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     case 4: console.log('D');
//     break;
//     default: console.log('F');
// }










