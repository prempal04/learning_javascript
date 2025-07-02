// Class is a blueprint for creating objects with specific properties and methods.

// Objects are instances of classes that can hold data and functionality.


class Human{
    age = 13; // public property means it can be accessed from outside the class

    #weight = 60; // #private property
    // protected property means it can be accessed from within the class and subclasses

    height = 170;


    walking(){
        console.log("Walking");
    }

    running(){
        console.log("Running");
    }

// getters and setters are used to access and modify private properties

get fetchWeight(){
    return this.#weight;
}

set modifyWeight(val){
    this.#weight = val;

}


// constructor is a special method to create and initialize an object created with a class

constructor(newAge, newWeight, newHeight){
    this.age = newAge;
    this.#weight = newWeight;
    this.height = newHeight;
}

}


let obj = new Human(12, 70, 180);

console.log(obj.age);
console.log(obj.weight);
console.log(obj.fetchWeight);
console.log(obj.height);
obj.walking();
obj.running();  


