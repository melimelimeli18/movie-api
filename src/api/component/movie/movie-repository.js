const Movie = require('../../../models/movie');

// gatha

async function getMovies(limit = 1300) {
    return Movie.find({}).limit(limit);
}

async function getMovieById(id) {
    return Movie.findById(id);
}

module.exports = {
    getMovies,
    getMovieById,
};