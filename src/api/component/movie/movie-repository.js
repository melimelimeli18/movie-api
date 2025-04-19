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

// gebi

async function getTopRatedMovies(limit = 1300) {
    return Movie.find({
        'imdb.rating' : { $ne: null, $type: 'number' }
    })
    .sort({ 'imdb.rating': -1 })
    .limit(limit);
}

async function getLatestMovies(limit = 1300) {
    return Movie.find({}).sort({ released: -1 }).limit(limit);
}

// caca

async function searchMovies(query) {
    return Movie.find({
        title: { $regex: query, $options: 'i' },
    });
}

async function getMoviesByGenre(genre, limit = 1300) {
    return Movie.find({ genres: genre }).limit(limit);
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