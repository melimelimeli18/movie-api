const Movie = require('../../../models/movie');

// gatha

async function getMovies(limit = 1300) {
    return Movie.find({}).limit(limit);
}

async function getMovieById(id) {
    return Movie.findById(id);
}

async function createMovie(movieData) {
    return Movie.create(movieData);
}

async function updateMovie(id, movieData) {
    return Movie.findByIdAndUpdate(id, movieData, { new: true});
}

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
};