// for loop

// for (let i = 0; i <10; i++){
//     console.log("Peace");
// }

// for (let i = 5; i > 0; i--){
//     console.log(i);
// }


// --break (breaks the loop at current iteration)


// for (let i = 0; i <10; i++){
//     if(i == 5){
//         break;
//     }
//     else console.log(i);
// }


// --continue (skip current iteration and move on to the next one)

// for (let i = 0; i <10; i++){
//     if(i == 5){
//         continue;
//     }
//     else console.log(i);
// }


// while loop


// let i = 0;
// while(i <10){
//     console.log("Peace");
//     i++;
// }


// --break  condition

// let i = 1;

// while(i <5){
//     if (i==3){
//         break;
//     }
//     else console.log(i);
//     i++;
// }


// --continue condition

// let i = 0;
// while(i <5){
//     if (i==3){
//         i++;
//         continue;
//     }
//     else console.log(i);
//     i++;
// }

// here the iteration should be increased before continue otherwise it will fall into an infinte loop;


// <<do-while loop>>

// let i = 1;

// do {
//     console.log("Peace")
//     //updation
//     i++;
// }
// while(i <= 5);


// in do while the 1st iteration is always printed without any condition check .. which is a big flaw of this type of loop



// <<Strings>> -- sequence of characters


// let firstName = "Love";
// let lastName = 'Peace';


// console.log(firstName);
// console.log(lastName);



// --back tick 

// let firstName = `Love 
// &
// Peace`;

// console.log(firstName);



// -- new string();\


// let firstName = new String ("Peace");

// console.log(firstName);

// it does not create a true string it wraps the string into an object means the data type is somehow changed.. shows error while doing === for same string.


// --concatinating strings

// let op1 = 'HINDI' ;
// let op2 = 'English';

// let ans = op1 + op2;
// console.log(ans);


// --to access var inside backticks use dollar;

// let finalAns = `${op1}${op2}`
// console.log(finalAns);

// --length of the string 

// console.log(op2.length);


// --uppprcase, lowercase

// console.log(op2.toUpperCase());
// console.log(op1.toLowerCase());


// --substring methods on strings

// let op = "PEACE";

// console.log(op.substring(2));
// console.log(op.substring(2,5)); //characters are extracted from in between the range .. doesnot includes the last end index character from the string;


// --split method

// let sentence = "Hey whats'up bro !"

// let words = sentence.split(' '); // split on the basis of spacing
 
// console.log(words);

// let sentence = "Hey \"whats'up\" bro !" // to get double quotes inside a string use back slashh before them

// console.log(sentence);


//  \\ backslash is used to make a special character a normal one, here the backslash is also a special character hence in order to make it a normal one use one more back slash

// let sentence = "Hey \\whats'up\\ bro !"

// let words = sentence.split('\\'); // split on the basis of spacing
 
// console.log(words);

// --join words

// console.log(words.join('-'))