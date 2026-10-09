const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const methodOverride = require('method-override');

const {v4: uuid} = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

let posts = [
    {
        id: uuid(),
        username: "@prempal",
        content: "I Love Coding"
    },
    {
        id: uuid(),
        username: "@phoenix",
        content: "I Love Coding"
    }, 
    {
        id: uuid(),
        username: "@SAM",
        content: "I Love Coding"
    }
] 

app.get('/', (req, res) => {
  res.send('Server working well');
});

// to get all posts
app.get('/posts', (req, res) => {
  res.render('index.ejs', { posts });
});

// to get new post form
app.get('/posts/new', (req, res) => {
  res.render('new.ejs', { posts });
}); 

// to create new post
app.post('/posts', (req, res) => {
  let {username, content} = req.body;
  let id = uuid();
  posts.push({ username, content, id });
  res.redirect('/posts');
}); 

// to get post details
app.get("/posts/:id", (req, res) => {
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render('show.ejs', {post});

});


app.patch("/posts/:id", (req, res) => {
  let{id} = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect('/posts');
});


app.get("/posts/:id/edit", (req, res) => {
  let{id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render('edit.ejs', {post});
});

app.get("/posts/:id/edit", (req, res) => {
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render('edit.ejs', {post});
});

app.delete("/posts/:id", (req,res) => {
  let {id} = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect('/posts');

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
