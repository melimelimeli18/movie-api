const movieRepository = require('./movie-repository');

// gatha

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

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
};