const express = require('express');
const movieController = require('./movie-controller');
const route = express.Router();

module.exports = (app) => {
    app.use ('/movies', route);

    // gatha
    
    // GET MOVIES
    route.get('/', movieController.getMovies);

    // POST MOVIES
    route.post('/', movieController.createMovie);

    // PUT MOVIES BY ID (update film berdasarkan id)
    route.put('/:id', movieController.updateMovie);

    //gatha

    // GET MOVIE BY ID
    route.get('/:id', movieController.getMovieById);
};