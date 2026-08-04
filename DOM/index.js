// Document Object Model (DOM)

// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, where each node corresponds to a part of the document (such as elements, attributes, and text). JavaScript can interact with the DOM to dynamically read, modify, add, or remove content and structure on a web page. This allows developers to create interactive and dynamic web applications by manipulating the page in response to user actions or other events.

//Tokenizer is used to turn tags into token and then into node .. and many nodes combinely forms DOM

// Browser Object Model (BOM)

// we can fetch elements from document by using id and class name

// document.getElementById("fpara");
// document.getElementsByClassName("para");
// document.getElementsByTagName("tag");

// query selector

// document.querySelector('#fpara') // this will return only the first element with same tag not all other

// document.querySelectorAll('#fpara')

// --update existing elements

//inner html, outer html, text-content, inner text

// inner html is used to fetch inner tags from a parent division or tag

// outer html

// text content is used to fetch all the text inside the class or id including the spaces 

// inner text is used to fetch only the text which is gonna render on the browser screen

// createElement is used to create new elements 

// let element = document.querySelector('h1');
// element output is <h1></h1>

// element.textContent = 'Love & Peace'

// output will be Love & Peace

// output is <h1> Love & Peace </h1>

// --appendChild 

// bodyTag = document.querySelector('body');
// <body>​…​</body>​

// bodyTag
// <body>​…​</body>​


// let fheading = document.createElement('h1');

// fheading
// <h1>​</h1>​

// fheading.textContent = "Love & Peace";
// 'Love & Peace'

// fheading
// <h1>​Love & Peace​</h1>​

// bodyTag.appendChild(fheading);
// <h1>​Love & Peace​</h1>​
// bodyTag
// code is injected into the document by live server in the end


// --insertAdjacentElement() 
// it is used to add elements to the HTML file at desired position like before begin , after begin, before end, after end;

// let mydiv = document.querySelector('.mydiv');

// let newElement = document.createElement('span');
// newElement.textContent = "Love & Peace"

// mydiv.insertAdjacentElement('beforebegin' , newElement);

// 
// --beforebegin
// <div>
    // --afterbegin
    

        //--beforeend
//                  </div> 
// --afterend;


let smallHeadings = document.getElementsByClassName('heading');
smallHeadings[0].style.color = 'red';
console.log(smallHeadings[0].style.color);

// Select Elements 

//getElementById - returns a single element with the specified ID. It is used when you want to select a unique element on the page.

//getElementsByClassName - returns a live HTMLCollection of elements with the specified class name. It is used when you want to select multiple elements that share the same class.

//getElementsByTagName - returns a live HTMLCollection of elements with the specified tag name. It is used when you want to select all elements of a particular type (e.g., all <p> tags).

// Query Selector Methods -- it allows us to use any CSS Selector.

console.dir(document.querySelector('#para')); // returns the first element that matches the specified CSS selector. It is used when you want to select a single element based on a CSS selector.

// querySelectorAll -- returns a static NodeList of all elements that match the specified CSS selector. It is used when you want to select multiple elements based on a CSS selector.

console.dir(document.querySelectorAll('.para'));


// using properties and methods to manipulate the DOM

// innerText - returns the visible text content of an element, excluding any HTML tags. It is used when you want to get or set the text that is displayed to the user.

// textContent - returns the text content of an element, including all HTML tags. It is used when you want to get or set the raw text content of an element, including any hidden or non-visible text.

// innerHTML - returns the HTML content of an element, including all child elements and their HTML tags. It is used when you want to get or set the entire HTML structure of an element.


let heading = document.querySelector('h1');

heading.innerText = "Love & Peace";

heading.innerHTML = "<u>Love & Peace</u>";


// Manipulating Attributes


// let img = document.querySelector('img');

// img.setAttribute('src', 'https://images.unsplash.com/photo-1682685794700-1f5e3b8c7d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VyaW91c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80');

// img.setAttribute('alt', 'A beautiful image');

// console.log(img.getAttribute('src'));
// console.log(img.getAttribute('alt'));


// manipulating Styles

// let head = document.querySelectorAll('ol');

// for(let i = 0; i < head.length; i++){
//     head[i].style.backgroundColor = 'black';
//     head[i].style.color = 'yellow';
// }

//another approach 
// for(styl of head){
//     styl.style.backgroundColor = 'black';
//     styl.style.color = 'white';
// }


// using classList to manipulate classes

let list = document.querySelector('ol');

list.classList.add('list');

list.classList.contains('list'); // returns true if the class is present, false otherwise

// list.classList.toggle('list'); // adds the class if it is not present, removes it if it is present

// list.classList.remove('list'); // removes the class if it is present


// Navigation in the DOM

// parentNode - returns the parent node of the specified element. It is used to traverse up the DOM tree.

// childNodes - returns a NodeList of all child nodes of the specified element, including text nodes and comment nodes. It is used to traverse down the DOM tree.

// firstChild - returns the first child node of the specified element. It is used to access the first child element or node.

// lastChild - returns the last child node of the specified element. It is used to access the last child element or node.

// nextSibling - returns the next sibling node of the specified element. It is used to traverse horizontally in the DOM tree.

// previousSibling - returns the previous sibling node of the specified element. It is used to traverse horizontally in the DOM tree.

let para = document.querySelector('#para');

console.log(para.parentNode); // returns the parent node of the specified element

console.log(para.childNodes); // returns a NodeList of all child nodes of the specified element

console.log(para.firstChild); // returns the first child node of the specified element

console.log(para.lastChild); // returns the last child node of the specified element

console.log(para.nextSibling); // returns the next sibling node of the specified element

console.log(para.previousSibling); // returns the previous sibling node of the specified element

console.log(para.childElementCount); // returns the number of child elements of the specified element

console.log(para.parentElement); // returns the parent element of the specified element

console.log(para.children); // returns a live HTMLCollection of all child elements of the specified element

console.log(para.firstElementChild); // returns the first child element of the specified element

console.log(para.lastElementChild); // returns the last child element of the specified element

console.log(para.nextElementSibling); // returns the next sibling element of the specified element

console.log(para.previousElementSibling); // returns the previous sibling element of the specified element


// adding elements;


// let newPara = document.createElement('p'); // creates a new <p> element and assigns it to the variable newPara

// newPara.textContent = "This is a new paragraph."; // sets the text content of the new <p> element

// document.body.appendChild(newPara); // appends the new <p> element as a child of the <body> element 

// append -- it is used to add elements to the end of the parent element

// prepend -- it is used to add elements to the beginning of the parent element

// insertBefore -- it is used to insert an element before a specified child element of the parent element

// replaceChild -- it is used to replace a specified child element of the parent element with a new element

// removeChild -- it is used to remove a specified child element from the parent element

// insertAdjacentElement -- it is used to insert an element at a specified position relative to the parent element



// DOM Events -- these are actions that occur in the browser, such as user interactions (clicks, key presses, mouse movements), page loading, or other changes to the document. JavaScript can listen for these events and respond to them by executing specific functions or code blocks. This allows developers to create interactive and dynamic web applications that react to user input and other events in real-time.


// button click event

let button = document.querySelector('button');

// button.onclick = function() {
//     console.log('Button clicked!');
//     // alert('Button clicked!'); // alert box will pop up when the button is clicked
// };


// button.onmouseenter = function() {
//     console.log('Mouse entered the button!');
    // alert('Mouse entered the button!'); // alert box will pop up when the mouse enters the button
//};


// event listeners -- it is used to attach an event handler to a specified element. It allows you to listen for specific events (like clicks, key presses, etc.) and execute a function when that event occurs.

button.addEventListener('click', function() {
    console.log('Button clicked using addEventListener!');
    // alert('Button clicked using addEventListener!'); // alert box will pop up when the button is clicked
});

button.addEventListener('mouseenter', function() {
    console.log('Mouse entered the button using addEventListener!');
    // alert('Mouse entered the button using addEventListener!'); // alert box will pop up when the mouse enters the button
});


// Event Listeners for Elements

let p = document.querySelector('p');

p.addEventListener('click', function() {
    console.log('Paragraph clicked!');
    // alert('Paragraph clicked!'); // alert box will pop up when the paragraph is clicked
});

// let div = document.querySelector('div');

// div.addEventListener('mouseenter', function() {
//     console.log('Mouse entered the div!');
//     // alert('Mouse entered the div!'); // alert box will pop up when the mouse enters the div
// });

// this in event listeners ;

let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    console.log(this); // refers to the button element that was clicked
    this.style.backgroundColor = 'green'; // changes the background color of the button to green when clicked
});


// Keyboard Events -- these are events that occur when the user interacts with the keyboard, such as pressing a key, releasing a key, or typing text. JavaScript can listen for these events and respond to them by executing specific functions or code blocks. This allows developers to create interactive and dynamic web applications that react to user input from the keyboard in real-time.

// keydown -- it is triggered when a key is pressed down. It occurs before the character is added to the input field, allowing you to capture the key press event before the input value changes.

// keyup -- it is triggered when a key is released. It occurs after the character has been added to the input field, allowing you to capture the key release event after the input value changes.

// keypress -- it is triggered when a key that produces a character value is pressed down. It occurs before the character is added to the input field, allowing you to capture the key press event before the input value changes. Note that this event is deprecated and may not be supported in all browsers.


// let inp = document.querySelector('#input');

// inp.addEventListener('keydown', function(event) {
//     console.log(`Key "${event.key}" pressed down.`);
//     // alert(`Key "${event.key}" pressed down.`); // alert box will pop up when a key is pressed down
// });

// inp.addEventListener('keyup', function(event) {
//     console.log(`Key "${event.key}" released.`);
//     // alert(`Key "${event.key}" released.`); // alert box will pop up when a key is released
// });

// inp.addEventListener('keypress', function(event) {
//     console.log(`Key "${event.key}" pressed.`);
//     // alert(`Key "${event.key}" pressed.`); // alert box will pop up when a key is pressed
// });


// Form Events -- these are events that occur when the user interacts with HTML forms, such as submitting a form, changing input values, or focusing on form fields. JavaScript can listen for these events and respond to them by executing specific functions or code blocks. This allows developers to create interactive and dynamic web applications that react to user input in forms in real-time.

// submit -- it is triggered when a form is submitted. It occurs before the form data is sent to the server, allowing you to validate the form data or prevent the default submission behavior.

// change -- it is triggered when the value of an input field changes. It occurs after the user has finished interacting with the input field, allowing you to capture the final value of the input.

// focus -- it is triggered when an input field gains focus. It occurs when the user clicks on or tabs into the input field, allowing you to perform actions when the user starts interacting with the field.

// blur -- it is triggered when an input field loses focus. It occurs when the user clicks away from or tabs out of the input field, allowing you to perform actions when the user stops interacting with the field.

let form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // prevents the default form submission behavior
//     console.log('Form submitted!');
// });

form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevents the default form submission behavior

    // let user = document.querySelector('#user');
    // let pass = document.querySelector('#pass');

    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(`${user.value}`); // value of the input field is logged to the console
    console.log(`${pass.value}`); // value of the input field is logged to the console
});

// event bubbling  -- it is a concept in the DOM where an event starts at the most specific element (the target element) and then "bubbles up" to its parent elements in the hierarchy. This means that when an event occurs on a child element, it can also trigger event listeners on its parent elements, allowing for event delegation and more efficient event handling.


let div = document.querySelector('.div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener('click', function() {
    console.log('Div clicked!');
});

ul.addEventListener('click', function() {
    event.stopPropagation(); // stops the event from bubbling up to parent elements
    console.log('UL clicked!');
});

lis.forEach(function(li) {
    li.addEventListener('click', function() {
        event.stopPropagation(); // stops the event from bubbling up to parent elements
        console.log(`LI clicked: ${this.textContent}`);
    });
});


// event delegation -- it is a technique in the DOM where a single event listener is added to a parent element to handle events for its child elements. Instead of adding individual event listeners to each child element, the parent element listens for events that bubble up from its children. This allows for more efficient event handling, especially when dealing with dynamically added or removed child elements.