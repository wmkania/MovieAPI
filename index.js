const express = require('express');
  morgan = require('morgan');
const app = express();

app.use(morgan('common'));


let topMovies = [
  {
    title: 'Movie 1',
    author: 'Author 1'
  },
  {
    title: 'Movie 2',
    author: 'Author 2'
  },
  {
    title: 'Movie 3',
    author: 'Author 3'
  },
  {
    title: 'Movie 4',
    author: 'Author 4'
  },
  {
    title: 'Movie 5',
    author: 'Author 5'
  },
  {
    title: 'Movie 6',
    author: 'Author 6'
  },
  {
    title: 'Movie 7',
    author: 'Author 7'
  },
  {
    title: 'Movie 8',
    author: 'Author 8'
  },
  {
    title: 'Movie 9',
    author: 'Author 9'
  },
  {
    title: 'Movie 10',
    author: 'Author 10'
  }
];

app.get('/', (req, res) => {
  res.send('This is the list of my top 10 movies. ');
});


app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('An unexpected error has occurred.');
});

app.listen(8080, () => {
  console.log('My Movie App listening on port 8080.');
});
