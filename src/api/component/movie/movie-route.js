const express = require('express');
const movieController = require('./movie-controller');
const route = express.Router();

module.exports = (app) => {
    app.use ('/movies', route);

    // gatha
    
    // GET MOVIES
    route.get('/', movieController.getMovies);

    // GET MOVIE BY ID
    route.get('/:id', movieController.getMovieById);
};