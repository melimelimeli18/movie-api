const movieService = require('./movie-service');
console.log('movieService:', movieService);

const { errorResponder, errorTypes } = require('../../../core/errors');

//gatha

async function getMovies (request, response, next) {
    try {
        const movies = await movieService.getMovies();
        return response.status(200).json(movies);
    } catch (error) {
        return next(error);
    }
}

async function getMovieById (request, response, next) {
    try {
        const movie = await movieService.getMovieById(request.params.id);
        if (!movie) {
            throw errorResponder(errorTypes.NOT_FOUND, 'Movie not found');
        }
        return response.status(200).json(movie);
    } catch (error) {
        return next (error);
    }
}

module.exports = {
    getMovies,
    getMovieById,
};