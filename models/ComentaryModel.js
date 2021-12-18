const mongoose = require('mongoose');

const ComentarySchema = new mongoose.Schema({
    comentary: { type: String },
    comentaryPhoto: {type: String },
    userId:{
      type: [{ type: mongoose.Types.ObjectId, ref: "Usersmodel", required: true }],
    },
    itinerary: {
        type: [{ type: mongoose.Types.ObjectId, ref: "ItineraryModel", required: true }],
      }
    
})

const ComentaryModel = mongoose.model('comentary', ComentarySchema)

module.exports = ComentaryModel; 