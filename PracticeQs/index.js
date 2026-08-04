// add the following elements to the container using only js and dom methods;

// 1. a <p> with red text that says "Hey I'm red!"

let newPara = document.createElement('p');

newPara.textContent = "Hey I'm red!";

newPara.style.color = "red";

document.body.appendChild(newPara);


// 2. an <h3> with blue text that says "I'm a blue h3!"

let newH3 = document.createElement('h3');

newH3.textContent = "I'm a blue h3!";

newH3.style.color = "blue";

document.body.appendChild(newH3);

// 3. a <div> with a black border and pink background color with the following elements inside of it:

let newDiv = document.createElement('div');

newDiv.style.border = "1px solid black";

newDiv.style.backgroundColor = "pink";

document.body.appendChild(newDiv);

// - another <h1> that says "I'm in a div"

let newH1 = document.createElement('h1');

newH1.textContent = "I'm in a div";

newDiv.appendChild(newH1);

// - a <p> that says "ME TOO!"

let newP = document.createElement('p');

newP.textContent = "ME TOO!";

newDiv.appendChild(newP);


// Create a new input and button element using JS .. set the text of button "click me";

let newInput = document.createElement('input');
let newButton = document.createElement('button');

newButton.textContent = "click me";

document.body.appendChild(newInput);
document.body.appendChild(newButton);


// add the following attributes to the element : 

// -- change placeholder value of input to 'username';
// -- change the id of button to "btn";

newInput.setAttribute('placeholder', 'username');

newButton.setAttribute('id', 'btn');

// access the button using the queryselector and button id . change the button background color to blue and text color to white;

let button = document.querySelector('#btn');

button.style.backgroundColor = "blue";

button.style.color = "white";


// create an h1 element on the oage and set its tesxt to "DOM Practice" underlined .. change it scolor to purple

let newHeading = document.createElement('h1');

newHeading.textContent = "DOM Practice";

newHeading.style.color = "purple";

newHeading.style.textDecoration = "underline";

document.body.prepend(newHeading);


// create a p tag on the page and set its text "Javascript is awesome" where Javascript is bold and awesome is italicized .

let newParagraph = document.createElement('p');

newParagraph.innerHTML = "<b>Javascript</b> is <i>awesome</i>";

document.body.appendChild(newParagraph);

// try out the following events in event listener on you own:

// mouoseout;

let mouseout = document.querySelector('button');

mouseout.addEventListener('mouseout', function() {
    mouseout.style.backgroundColor = "red";
    mouseout.style.color = "black";
});


// key press

let inp = document.querySelector('input');

inp.addEventListener('keypress', function() {
    console.log(`Key pressed: ${event.key}`);
});


// scroll 


let scroll = document.querySelector('body');

scroll.addEventListener('scroll', function() {
    console.log(`Scroll position: ${window.scrollY}`);
});

// load

let load = document.querySelector('body');

load.addEventListener('load', function() {
    console.log(`Page loaded`);
});


// create an input element on the page with a placeholder of "enter your name" and an h2 heading on the page inside HTML.
// the purpose of this input element is to enter a user's name so it should only input letters from a-z and A-Z. and space (all other characters should not be detected). whenever the user inputs their name, their input should be dynamically visible inside the heading 
//[please note that no other character apart from the allow characters shouls be visible in the heading]

let nameInput = document.querySelector('#input2');
let heading = document.querySelector('#heading');

nameInput.addEventListener('input', function() {
    let inputValue = nameInput.value;
    let filteredValue = inputValue.replace(/[^a-zA-Z ]/g, ''); // filter out any character that is not a letter or space here /[^a-zA-Z ]/g, '' means that any character that is not a letter or space will be replaced with an empty string.

    heading.textContent = filteredValue;
});


