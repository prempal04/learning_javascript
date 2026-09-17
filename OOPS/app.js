// OOPS is a simple web application that demonstrates object-oriented programming concepts in JavaScript. It allows users to create and manage objects, showcasing inheritance, encapsulation, and polymorphism through an interactive interface. The app is built using modern JavaScript frameworks and libraries to provide a seamless user experience.


const stu1 ={
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    function: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
    }
}
const stu2 ={
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    function: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
    }
}
const stu3 ={
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    function: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
    }
}

// in the above snippet of code there is one major issue which is the repetition of code for each student object. This can be improved by using a constructor function or a class to create student objects, which will help in reducing redundancy and improving maintainability.


// class student {
//     constructor(name, age, major) {
//         this.name = name;
//         this.age = age;
//         this.major = major;
//     }
//     talk(){
//        console.log(`Hi my name is ${this.name}`);
//     }
// }

// class Teacher{
//     constructor(name, age, subject){
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }
//     talk(){
//         console.log(`Hi my name is ${this.name}`);
//     }
// }   

// now in above code we have created two classes student and teacher which will help us to create multiple objects without repeating the code. This is a better approach as it follows the principles of object-oriented programming and makes the code more organized and maintainable.

// but also we can improve the code by creating a parent class called Person which will have common properties and methods for both student and teacher classes. This will help us to avoid code duplication and make the code more organized.

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi my name is ${this.name}`);
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

// now in above code we have created a parent class called Person which has common properties and methods for both student and teacher classes. This will help us to avoid code duplication and make the code more organized. Now we can create multiple objects of student and teacher classes without repeating the code.

let st1 = new Student("John Doe", 20, "Computer Science");
let st2 = new Student("Jane Smith", 22, "Mathematics");

let t1 = new Teacher("Mr. Anderson", 45, "Physics");

t1.talk();
st1.talk();
