const express = require('express');
const path = require('path');
  morgan = require('morgan');
const app = express();

app.use(morgan('common'));


let topMovies = [
  {
    title: 'The Shawshank Redemption',
    description: 'example text',
    director: 'Frank Darabont',
    genre: 'drama'
  },
  {
    title: 'The Godfather',
    description: 'example text',
    director: 'Francis Coppola',
    genre: 'drama'
  },
  {
    title: 'Malena',
    description: 'example text',
    director: 'Giuseppe Tornatore',
    genre: 'drama'
  },
  {
    title: 'The Shining',
    description: 'example text',
    director: 'Stanley Kubrick',
    genre: 'horror'
  },
  {
    title: 'Dreamcatcher',
    description: 'example text',
    director: 'Lawrence Kasdan',
    genre: 'horror'
  },
  {
    title: 'Pulp Fiction',
    description: 'example text',
    director: 'Quentin Tarantino',
    genre: 'comedy'
  },
  {
    title: 'Inception',
    description: 'example text',
    director: 'Christopher Nolan',
    genre: 'thriller'
  },
  {
    title: 'The Matrix',
    description: 'example text',
    director: 'Lilly Wachowski',
    genre: 'science fiction'
  },
  {
    title: 'Alien',
    description: 'example text',
    director: 'Ridley Scott',
    genre: 'science fiction'
  },
  {
    title: 'Titanic',
    description: 'example text',
    director: 'James Cameron',
    genre: 'drama'
  },
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
