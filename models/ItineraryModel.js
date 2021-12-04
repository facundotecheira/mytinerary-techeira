const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    imageItinerary: { type: String },
    imageAuthor: {type: String } ,
    nameAuthor: { type: String },
    title:{type: String},
    description:{type: String},
    hashtags:{type:String},
    hours:{type:String},
    price:{type:String},
    like:{type:Number},
    comments: {type: String},
    cities: {
        type: [{ type: mongoose.Types.ObjectId, ref: "Citymodel", required: true }],
      },
    
})

const Itinerarymodel = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerarymodel;