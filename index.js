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
    description: 'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.',
    director: 'Frank Darabont',
    genre: 'drama',
  },
  {
    title: 'The Godfather',
    description: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael.',
    director: 'Francis Coppola',
    genre: 'drama'
  },
  {
    title: 'Malena',
    description: 'In Sicily, during the Second World War, a teenage boy gets smitten by Malena, a sensual woman living in a small town.',
    director: 'Giuseppe Tornatore',
    genre: 'drama'
  },
  {
    title: 'The Shining',
    description: 'Jack and his family move into an isolated hotel with a violent past.',
    director: 'Stanley Kubrick',
    genre: 'horror'
  },
  {
    title: 'Dreamcatcher',
    description: 'Jonesy, Henry, Pete and Beaver have a special secret and are equipped to communicate using telepathy.',
    director: 'Lawrence Kasdan',
    genre: 'horror'
  },
  {
    title: 'Pulp Fiction',
    description: 'In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters and small-time criminals.',
    director: 'Quentin Tarantino',
    genre: 'comedy'
  },
  {
    title: 'Inception',
    description: 'Cobb steals information from his targets by entering their dreams.',
    director: 'Christopher Nolan',
    genre: 'thriller'
  },
  {
    title: 'The Matrix',
    description: 'Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
    director: 'Lilly Wachowski',
    genre: 'science fiction'
  },
  {
    title: 'Alien',
    description: 'The crew of a spacecraft, Nostromo, intercept a distress signal from a planet and set out to investigate it.',
    director: 'Ridley Scott',
    genre: 'science fiction'
  },
  {
    title: 'Titanic',
    description: 'Seventeen-year-old Rose hails from an aristocratic family and is set to be married.',
    director: 'James Cameron',
    genre: 'drama'
  }
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
  }
];


let allDirectors = [
  {
    name: 'Frank Darabont',
    bio: 'French-American film director, screenwriter and producer of Hungarian descent.',
    birthYear: 1959,
    deathYear: 0,
  },
  {
    name: 'Francis Coppola',
    bio: 'American film director, producer, and screenwriter.',
    birthYear: 1939,
    deathYear: 0,
  },
  {
    name: 'Giuseppe Tornatore',
    bio: 'Italian film director and screenwriter.',
    birthYear: 1956,
    deathYear: 0,
  },
  {
    name: 'Stanley Kubrick',
    bio: 'American film director, producer, screenwriter, and photographer.',
    birthYear: 1929,
    deathYear: 1999,
  },
  {
    name: 'Lawrence Kasdan',
    bio: 'American director, screenwriter, and producer.',
    birthYear: 1949,
    deathYear: 0,
  },
  {
    name: 'Quentin Tarantino',
    bio: 'American film director, screenwriter, producer, author, film critic, and actor.',
    birthYear: 1963,
    deathYear: 0,

  },
  {
    name: 'Christopher Nolan',
    bio: 'ABritish-American film director, producer, and screenwriter.',
    birthYear: 1970,
    deathYear: 0,
  },
  {
    name: 'Lilly Wachowski',
    bio: 'American film director, producer, and screenwriter.',
    birthYear: 1967,
    deathYear: 0,
  },
  {
    name: 'Riddley Scott',
    bio: 'English film director and producer.',
    birthYear: 1937,
    deathYear: 0,
  },
  {
    name: 'James Cameron',
    bio: 'Canadian filmmaker best known for making science fiction and epic films.',
    birthYear: 1954,
    deathYear: 0,
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


//Gets data about a single movie by title

app.get('/movies/:title', (req, res) => {
   res.json(topMovies.find((movie) => {
     return movie.title === req.params.title
   }));
});


//Gets a list of all genres in JSON format

app.get('/genres', (req, res) => {
  res.json(allGenres);
});

//Gets data about a genre by genre name

app.get('/genres/:name', (req, res) => {
   res.json(allGenres.find((genre) => {
     return genre.name === req.params.name
   }));
});

//Gets a list of all directors in JSON format

app.get('/directors', (req, res) => {
  res.json(allDirectors);
});

//Gets data about a director by name

app.get('/directors/:name', (req, res) => {
   res.json(allDirectors.find((genre) => {
     return genre.name === req.params.name
   }));
});

// Update death year of a director by name

app.put('/directors/:name/:deathYear', (req, res) => {
  let director = directors.find((director) => { return director.name === req.params.name });

  if (director) {
    director.deathYear[req.params.deathYear] = parseInt(req.params.deathYear);
    res.status(201).send('Director ' + req.params.name + ' has died in ' + req.params.deathYear);
  } else {
    res.status(404).send('Director with the name ' + req.params.name + ' was not found.');
  }
});

// Add a new movie to the database

app.post('/movies', (req, res) => {
  let newMovie = req.body;

  if (!newStudent.title) {
    const message = 'Missing name in request body';
    res.status(400).send(message);
  } else {
    newMovie.id = uuid.v4();
    topMovies.push(newMovie);
    res.status(201).send(newMovie);
  }
});

//Delete a movie by name from the database

app.delete('/movies/:id', (req, res) => {
  let movie = topMovies.find((movie) => {
    return movie.id === req.params.id });
  if (movie) {
    movies = movies.filter((obj) => { return obj.id !== req.params.id });
    res.status(201).send('Movie ' + req.params.id + ' was deleted.');
  }
});



// Gets a list of all users


// Gets data about a single user by name


// Add a new user


// Delete an existing user


// Add a movie to Favourites list by ID


// Remove a movie from Favourites list by ID


// Error handling function.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('An unexpected error has occurred.');
});

app.listen(8080, () => {
  console.log('My Movie App listening on port 8080.');
});
