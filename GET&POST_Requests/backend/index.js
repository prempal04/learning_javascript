const express = require('express');
const app = express();
const port = 3000;

// this is used to parse the incoming request body in a middleware before your handlers, available under the req.body property.
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/register', (req,res) => {
    // in get request the data is sent in the query string of the URL, which can be accessed using req.query.
    let {user, password} = req.query;
    res.send(`Standard GET Response. Welcome ${user}!`)
});

app.post('/register', (req,res) => {
    // in post request the data is sent in the body of the request, which can be accessed using req.body.
    let {user, password} = req.body;
    res.send(`Standard POST Response. Welcome ${user}!`)
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});