const Movie = require("../models/Movies.js");
const mongoose = require("mongoose");
const movies = require("./data");

mongoose.connect('mongodb://localhost/lab-cinema-express', { useNewUrlParser: true })
    .then(() => {
        return Movie.deleteMany();
    }).then(() => {
        return Movie.insertMany(movies)
    }).then(insertedMovies => {
        console.log('Successfully inserted movies into the DB')
        return mongoose.connection.close();
    }).catch(err => {
        console.error('Could not insert these movies', err);
        mongoose.connection.close();
    });
