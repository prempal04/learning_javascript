//Dynamic Object Creation and Modification

let obj = {
    age: 12,
    wt: 56,
    ht: 120
};

console.log(obj)

obj.color = "red";

console.log(obj)

// Object Cloning 

// cloning can be done through various methods like Object.assign, spread operator, or JSON methods

// --SPREAD OPERATOR--

let obj2 = { ...obj };

console.log(obj2);


// --OBJECT.ASSIGN--
let obj3 = Object.assign({}, obj);

console.log(obj3);


// --JSON METHODS--
let obj4 = JSON.parse(JSON.stringify(obj));

console.log(obj4);  

//iteration method using for loop

let dest = {};
// we can iterate through the object and create a new object with the same keys and values

for (let key in obj) {
    let newKey = key;
    let newValue = obj[key];
    //insert in new dest
    dest[newKey] = newValue;
}

console.log(dest);
// to clone 2 or more objects together, we can use the spread operator or Object.assign
let obj5 = { ...obj, ...obj2, ...obj3 };

// through object.assign
let obj6 = Object.assign({}, obj, obj2, obj3);

console.log(obj5);
console.log(obj6);



// Garbage Collector 

// JavaScript has a garbage collector that automatically frees up memory by removing objects that are no longer referenced.
// This helps prevent memory leaks and ensures efficient memory usage in applications.