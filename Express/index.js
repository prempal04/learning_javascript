// use nodemon index.js to start the server, it will automatically restart the server when changes are made to the code.

// EXPRESS JS
const express = require('express');

const app = express();

// ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
});

// // HANDLING REQUESTS
// app.use((req, res) => {
//     console.log("request received");

//     // SENDING A RESPONSE
//     res.send({
//         name: "Sam",
//         age: 25,
//         city: "New York"
//     })
// });

// ROUTING

app.get("/", (req, res) => {
    res.send("Hello home page");
});

// app.get("/about", (req, res) => {
//     res.send("Hello from the about page");
// });

// app.get("/contact", (req, res) => {
//     res.send("Hello from the contact page");
// });

// app.get('/{*splat}', (req, res) => {
//     res.send("404 page not found");
// });



// app.get("/:username", (req, res) => {
//     let {username} = req.params;
//     res.send(`Welcome to the page of @${username}`);
// });


// Express -- req and res are objects that represent the HTTP request and response respectively. The req object contains information about the incoming request, such as the request headers, query parameters, and request body. The res object is used to send a response back to the client.

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send(`<h1>Search query is empty</h1>`);
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
});

