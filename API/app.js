// API -- Application Programming Interface
// This is the main entry point for the API server. It sets up the Express application, configures middleware, and defines routes for handling API requests.

// JSON -- JavaScript Object Notation
// This is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data between a server and a web application.

// JSON.parse() -- This method parses a JSON string and constructs the JavaScript value or object described by the string. It is used to convert JSON data received from a client into a JavaScript object that can be manipulated within the server application.

// JSON.stringify() -- This method converts a JavaScript object or value to a JSON string. It is used to send data from the server to the client in a format that can be easily consumed by the client application.

let jsonres = "{\"status\": \"success\", \"message\": \"API server is running.\"}";

let validres =  JSON.parse(jsonres);

console.log(validres);


// Testing API requests -- we use Hoppscotch & Postman to test our API endpoints. These tools allow us to send HTTP requests to our server and view the responses, making it easier to debug and verify that our API is functioning correctly.

// AJAx -- Asynchronous JavaScript and XML
// This is a technique for creating fast and dynamic web pages. It allows web applications to send and retrieve data from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. In this context, we use AJAX to make API requests from the client side to the server.

// Http Verbs -- These are methods used to indicate the desired action to be performed on a resource in a RESTful API. The most common HTTP verbs are GET (retrieve data), POST (create new data), PUT (update existing data), and DELETE (remove data). Each verb corresponds to a specific type of operation that can be performed on the server.

// fetch() -- This is a modern JavaScript API for making HTTP requests. It returns a Promise that resolves to the Response object representing the response to the request. The fetch() method is used to send requests to the server and handle responses in a more flexible and powerful way compared to older methods like XMLHttpRequest.

// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res)=> {
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
//     .catch((err)=> {
//         console.log(err);
//     })



// using fetch with async/await

let url = "https://catfact.ninja/fact";

// async function getCatFact() {
//     try {
//         let res = await fetch(uerl);
//         let data = await res.json();
//         console.log(data.fact);
//     }  catch (err) {
//         console.log(err);
//     }
// }


// axios -- it is a promise-based HTTP client for the browser and Node.js. It provides an easy-to-use API for making HTTP requests and handling responses. Axios supports features like request and response interceptors, automatic JSON data transformation, and cancellation of requests. It is widely used in web development for making API calls and handling asynchronous operations.

let btn = document.querySelector(".btn");
btn.addEventListener("click", async ()=> {
    let fact = await getCatFact(); 
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
}); 


async function getCatFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact ;
    }  catch (err) {
        console.log(err);
        return "No Fact Found";
    }
}

// sending headers with axios request

let url2 = "https://icanhazdadjoke.com/";

async function getJoke(){
    try{
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url2, config);
        console.log(res.data); 
        }catch(err){
            console.log(err); 
        }
}


// updating query string of url with axios

let url3 = "http://universities.hipolabs.com/search?name=";

let btn2 = document.querySelector (".btn2");
btn2.addEventListener("click", async ()=> {
    let country = document.querySelector("input").value;
    console.log(country);

    let collArr = await getColleges(country);
    show(collArr);

});

function show(collArr){
    let list = document.querySelector("#list");
    list.innerText = "";

    for(col of collArr){
        console.log(col.name); 
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
 

async function getColleges(country) {
    try{
        let res = await axios.get(url3+country); 
        return res.data;
    }catch(e){
        console.log("error: ", e);
        return [];         
    }
}

