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

// jeje

async function deleteMovie(id) {
    return Movie.findByIdAndDelete(id);
}

async function getShortMovies() {
    return Movie.find({ runtime:{$lte:40} });
}

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
};