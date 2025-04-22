const movieRepository = require('./movie-repository');

async function getMovies(){
    return movieRepository.getMovies();
}

async function getMovieById(id) {
    return movieRepository.getMovieById(id);
}

async function createMovie(movieData) {
    return movieRepository.createMovie(movieData);
}

async function updateMovie(id,movieData) {
    return movieRepository.updateMovie(id, movieData);
}

// jeje

async function deleteMovie(id) {
    return movieRepository.deleteMovie(id);
}

async function getShortMovies() {
    return movieRepository.getShortMovies();
}

// gebi

async function getTopRatedMovies() {
    return movieRepository.getTopRatedMovies();
}

async function getLatestMovies() {
    return movieRepository.getLatestMovies();
}

// caca

async function searchMovies(query) {
    return movieRepository.searchMovies(query);
}

async function getMoviesByGenre(genreId) {
    return movieRepository.getMoviesByGenre(genreId);
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