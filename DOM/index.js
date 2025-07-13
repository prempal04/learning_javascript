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

let mydiv = document.querySelector('.mydiv');

let newElement = document.createElement('span');
newElement.textContent = "Love & Peace"

mydiv.insertAdjacentElement('beforebegin' , newElement);

// 
// --beforebegin
// <div>
    // --afterbegin
    

        //--beforeend
//                  </div> 
// --afterend;


