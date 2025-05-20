const express = require('express');
const path = require('node:path');
const app = express();
const port = 3000;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static assets setup //styles
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/', (req, res) => {
    res.render('index', {title:"Mini Messageboard", messages:messages});
});

app.get('/new', (req, res) => {
    res.render('form', { title: 'New Message' }); 
});

app.post('/new', (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.authorName, added: new Date() });
    res.redirect("/")
});









app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});