//schema

const mongoose = require('mongoose')

const Schema  = mongoose.Schema({
    FullName: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    PhoneNumber: {
        type: Number,
        require: true
    },
    Country: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    ZipCode: {
        type: Number,
        require: true
    },   
})

module.exports = mongoose.model('User',Schema)