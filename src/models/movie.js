const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title : { type : String, required : true},
    plot : String,
    genres : [String],
    runtime : Number,
    cast : [String],
    poster : String,
    languages : [String],
    released : {type : Date},
    directors : [String],
    rated : String,
    awards : {
        wins : Number,
        nominations : Number,
        text : String,
    },
    year : Number,
    imdb : {
        rating : Number,
        votes : Number,
        id : Number,
    },
    countries : [String],
    type : String,
    tomatoes : {
        viewer : {
            rating : Number,
            numReviews : Number,
            meter : Number,
        },
        dvd : Date,
        lastUpdated : Date,
    },
    num_mflix_comments : Number,
    lastUpdated : Date,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;