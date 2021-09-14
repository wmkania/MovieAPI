const express = require('express');
const path = require('path');
  morgan = require('morgan');
const app = express();

app.use(morgan('common'));


let topMovies = [
  {
    title: 'Movie 1',
    director: 'Author 1'
  },
  {
    title: 'Movie 2',
    director: 'Author 2'
  },
  {
    title: 'Movie 3',
    director: 'Author 3'
  },
  {
    title: 'Movie 4',
    director: 'Author 4'
  },
  {
    title: 'Movie 5',
    director: 'Author 5'
  },
  {
    title: 'Movie 6',
    director: 'Author 6'
  },
  {
    title: 'Movie 7',
    director: 'Author 7'
  },
  {
    title: 'Movie 8',
    director: 'Author 8'
  },
  {
    title: 'Movie 9',
    director: 'Author 9'
  },
  {
    title: 'Movie 10',
    director: 'Author 10'
  }
];

app.get('/', (req, res) => {
  res.send('This is the list of my top 10 movies. ');
});

app.use('/documentation', express.static('public'));

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('An unexpected error has occurred.');
});

app.listen(8080, () => {
  console.log('My Movie App listening on port 8080.');
});
