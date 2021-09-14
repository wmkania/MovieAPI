const express = require('express');
  bodyParser = require('body-parser'),
  uuid = require('uuid');
  morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('common'));

app.use(bodyParser.json());

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


let allGenres = [
  {
    name: 'drama',
    description: 'The drama genre features stories with high stakes and a lot of conflicts.',
  },
  {
    name: 'science fiction',
    description: 'Science fiction is a genre of speculative fiction that typically deals with imaginative and futuristic concepts.',
  },
  {
    name: 'horror',
    description: 'Horror is a genre of fiction which is intended to, or has the capacity to frighten, scare, disgust, or startle its viewers.',
  },
  {
    name: 'comedy',
    description: 'A comedy film is a category of film in which the main emphasis is on humor.',
  },
  {
    name: 'thriller',
    description: 'Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety.',
  },
];


// Routes the main Welcome page.
app.get('/', (req, res) => {
  res.send('This is the list of my top 10 movies. ');
});


//Routes API Documentation page with Endpoint list.

app.use('/documentation', express.static('public'));


//Gets a list of all movies in JSON format

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/genres', (req, res) => {
  res.json(allGenres);
});

//Gets data about a single movie by title

app.get('/movies/:title', (req, res) => {
   res.json(topMovies.find((movie) => {
     return movie.title === req.params.title
   }));
});

//Gets data about a genre by genre name

app.get('/genres/:name', (req, res) => {
   res.json(allGenres.find((genre) => {
     return genre.name === req.params.name
   }));
});


// Add a new movie

app.post('/movies', (req, res) => {
   let newMovie = req.body;

   if (!newMovie.title) {
     const message = 'Missing movie title in request body';
     res.status(400).send(message);
   } else {
     newMovie.id = uuid.v4();
     topMovies.push(newMovie);
     res.status(201).send(newMovie);
   }
 });


//Delete a movie by name

app.delete('/movies/:id', (req, res) => {
  let movie = topMovies.find((movie) => {
    return movie.id === req.params.id });
  if (movie) {
    movies = movies.filter((obj) => { return obj.id !== req.params.id });
    res.status(201).send('Movie ' + req.params.id + ' was deleted.');
  }
});


// Gets a list of all users

app.get('/users', (req, res) => {
 Users.find()
 .then((users) => {
   res.status(201).json(users);
 })
 .catch((err) => {
   console.error(err);
   res.status(500).send('Error: ' + err);
 });
});


// Gets data about a single user by name

app.get('/users/:Name', (req, res) => {
   Users.findOne({Name: req.params.Name})
   .then ((user) => {
     res.json(user);
   })
   .catch((err) => {
     console.error(err);
     res.status(500).send('Error: ' + err);
   });
 });


   // Add a new user



// Error handling function.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('An unexpected error has occurred.');
});

app.listen(8080, () => {
  console.log('My Movie App listening on port 8080.');
});
