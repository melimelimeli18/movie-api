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

    // jeje

    // DELETE MOVIES BY ID
    route.delete('/:id', movieController.deleteMovie);

    // GET MOVIES SHORT
    route.get('/short', movieController.getShortMovies);

    //gatha

    // GET MOVIE BY ID
    route.get('/:id', movieController.getMovieById);

    // gebi

    // GET MOVIES by highest rating
    route.get('/top-rated', movieController.getTopRatedMovies);

    // GET MOVIES by latest release
    route.get('/latest', movieController.getLatestMovies);

    // caca

    //GET MOVIES by query
    route.get('/search/:query', movieController.searchMovies);

    //GET MOVIES by genre
    route.get('/genre/:genreId', movieController.getMoviesByGenre);
};