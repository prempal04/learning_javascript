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



// --changing styles in css

let para = document.getElementById('spara');
// this is used to fetch the element with id spara

para.style.backgroundColor = 'red';
// this is used to change the background color of the element with class para

para.style.color = 'white';
// this is used to change the text color of the element with class para

para.style.fontSize = '2rem';
// this is used to change the font size of the element with class para


// --css text

let secondElement = document.getElementsByClassName('sdiv');
// this is used to fetch the element with class sdiv

secondElement.style.cssText[0] = 'background-color: blue; color: white; font-size: 2rem;';

// --set attribute
// this is used to set the attribute of the element it actually replaces the existing attribute with the new one

let firstElement = document.querySelector('fdiv');
// this is used to fetch the element with class fdiv

firstElement.setAttribute('id', 'newId');
// this is used to set the id of the element with class fdiv

firstElement.setAttribute('style', 'background-color: green; color: white; font-size: 2rem;');
// this is used to set the style of the element with class fdiv

// --className
// this is used to set the class of the element

// let fpara = document.getElementById('fpara');
// this is used to fetch the element with id fpara

// fpara.className = 'newClass';
// this is used to set the class of the element with id fpara

// --classList
// this is used to add, remove, toggle, contains classes in the element

let fpara = document.getElementById('fpara');
// this is used to fetch the element with id fpara  

fpara.classList.add('newClass');
// this is used to add the class newClass to the element with id fpara

fpara.classList.remove('newClass');
// this is used to remove the class newClass from the element with id fpara

fpara.classList.toggle('newClass');
// this is used to toggle the class newClass from the element with id fpara

fpara.classList.contains('newClass');
// this is used to check if the class newClass is present in the element with id fpara