const movieRepository = require('./movie-repository');

// gatha

async function getMovies(){
    return movieRepository.getMovies();
}

async function getMovieById(id) {
    return movieRepository.getMovieById(id);
}

module.exports = {
    getMovies,
    getMovieById,
};