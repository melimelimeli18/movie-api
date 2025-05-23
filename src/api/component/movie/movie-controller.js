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

async function createMovie(request, response, next) {
    try {
        const movieData = request.body;

        if (!movieData.title) {
            throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title is required');
        }

        const movie = await movieService.createMovie(movieData);
        return response.status(201).json(movie);
    } catch (error) {
        return next(error);
    }
}

async function updateMovie(request, response, next) {
    try {
        const movieData = request.body;
        const movie = await movieService.updateMovie(request.params.id, movieData);

        if (!movie){
            throw errorResponder(errorTypes.NOT_FOUND, 'Movie not found');
        }

        return response.status(200).json(movie);
    } catch (error) {
        return next(error);
    }
}

// jeje

async function deleteMovie(request, response, next) {
    try {
        const movie = await movieService.deleteMovie(request.params.id);
        if (!movie) {
            throw errorResponder(errorTypes.NOT_FOUND, 'Movie not found');
        }
        return response.status(200).json({ message: 'Movie deleted'});
    } catch (error) {
        return next(error);
    }
}

async function getShortMovies(request, response, next) {
    try {
        const movies = await movieService.getShortMovies();
        return response.status(200).json(movies);
    } catch (error) {
        return next(error);
    }
}

// gebi
async function getTopRatedMovies(request, response, next) {
    try {
        const movies = await movieService.getTopRatedMovies();
        return response.status(200).json(movies);
    } catch (error) {
        return next(error);
    }
}

async function getLatestMovies(request, response, next) {
    try {
        const movies = await movieService.getLatestMovies();
        return response.status(200).json(movies);
    } catch (error) {
        return next(error);
    }
}

// caca
async function searchMovies(request, response, next) {
    try {
        const query = request.params.query;
        const movies = await movieService.searchMovies(query);
        return response.status(200).json(movies);
    } catch (error) {
        return next(error);
    }
}

async function getMoviesByGenre(request, response, next) {
    try {
        const genreId = request.params.genreId;
        const movies = await movieService.getMoviesByGenre(genreId);
        return response.status(200).json(movies);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
    getShortMovies,
    getTopRatedMovies,
    getLatestMovies,
    searchMovies,
    getMoviesByGenre,
};