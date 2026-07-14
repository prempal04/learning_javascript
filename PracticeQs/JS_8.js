// generate a random number between 1 and 100

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number: ", randomNum);

//generate a random number between 1 and 5

let randomNum2 = Math.floor(Math.random() * 5) + 1;
console.log("Random number between 1 and 5: ", randomNum2);

// generate a random number between 20 and 25
let randomNum3 = Math.floor(Math.random() * 6) + 20; // 
console.log("Random number between 20 and 25: ", randomNum3);   


// create a program that generates a random number representing a dice roll (1-6) and prints the result to the console.

let diceRoll = Math.floor(Math.random()*6) +1;
console.log("Dice roll: ", diceRoll);

// create an object representing a car that stores the following properties for the car: name, model, color , print car's name and model to the console.

let car = {
    name: "Toyota",
    model: "Camry",
    color: "Red"
}

console.log(`Car name: ${car.name}`);
console.log(`Car model: ${car.model}`);

// Create an object person with their name, age, city. edit their city's original value to "New York". Add a new property country and set it to "USA". Print the person's name, age, city, and country to the console.

let person = {
    name: "Harry Potter",
    age: 11,
    city: "Hogwarts"
}
console.log(`Person's original city: ${person.city}`);


person.city = "New York"; //edit city's original value to "New York"
person.country = "USA"; //add new property country

console.log(person); // print the person's name, age, city, and country to the console.


