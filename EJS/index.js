const { name } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

// this above line is used to set the views directory where the EJS templates are stored. The path.join() method is used to create an absolute path to the views directory, which is necessary for the app to locate the EJS templates correctly.

// even if we run the backend server from a different directory, the path.join() method will ensure that the correct path to the views directory is used.


app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/rolldice", (req, res) => {
    let dicevalue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { dicevalue });
    // here we are passing the dicevalue variable to the EJS template as an object. The key is dicevalue and the value is the value of the dicevalue variable. In the EJS template, we can access this value using <%= dicevalue %>.
    // This allows us to dynamically render content in the EJS template based on the value of the dicevalue variable.
    // The first argument is the name of the EJS template (without the .ejs extension) and the second argument is an object containing the data to be passed to the template.
    res.render("rolldice.ejs");
});

// app.get("/ig/:username", (req, res) => {
//     const followers = ["ram", "shyam", "hari", "gita", "sita"];
//     let { username } = req.params;
//     res.render("instagram.ejs", { username, followers});
// });


app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", {data});
});