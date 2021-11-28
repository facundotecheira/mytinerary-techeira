const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    path: { type: String },
    title: {type: String } ,
    country: { type: String },
    currency:{type: String},
    language:{type: String},
    
})

const Citymodel = mongoose.model('city', citySchema)

module.exports = Citymodel;