// function to roll a dice and always display the value 1to6

function rollDice() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Dice roll: ", diceRoll);
}

rollDice();


// create a function that gives us the average of 3 numbers; 


function averageOfThree(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

console.log(averageOfThree(3,5,7));
 
// create a function that prints the multiplication table of a number;

function table(num){
    for(let i = 1; i<=10; i++){
        console.log(num*i);
    }
}

table(19);


// create a function that returns the sum of numbers from 1 to n;

function sumOfNumbers(n){
    let sum = 0;
    for(let i = 1; i<=n ;i++){
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers(5)); // Output: 15 (1+2+3+4+5)

// create a functioni that returns the concatenation of string in an array;

let str = ["Prem", "pal"];

function concat(str){
    let result = "";

    for(let i = 0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(concat(str)); // Output: Hello World!