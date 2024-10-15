const express = require('express');
const path = require('node:path');
const app = express();
const PORT = 6969;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set up static asset handling
//link to css file in head.ejs
//style card
//possibly try images too
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Digital Meishi' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
