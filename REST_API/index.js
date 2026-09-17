const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

let posts = [
    {
        username: "@prempal",
        content: "I Love Coding"
    },
    {
        username: "@phoenix",
        content: "I Love Coding"
    }, 
    {
        username: "@SAM",
        content: "I Love Coding"
    }
] 

app.get('/', (req, res) => {
  res.send('Server working well');
});

app.get('/posts', (req, res) => {
  res.render('index.ejs', { posts });
});

app.get('/posts/new', (req, res) => {
  res.render('new.ejs', { posts });
}); 

app.post('/posts', (req, res) => {
  let {username, content} = req.body;
  posts.push({ username, content });
  res.redirect('/posts');
}); 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
