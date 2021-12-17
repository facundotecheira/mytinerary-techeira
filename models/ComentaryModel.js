const mongoose = require('mongoose');

const ComentarySchema = new mongoose.Schema({
    comentary: { type: String },
    comentaryPhoto: {type: String },
    itinerary: {
        type: [{ type: mongoose.Types.ObjectId, ref: "ItineraryModel", required: true }],
      },
    
})

const ComentaryModel = mongoose.model('comentary', ComentarySchema)

module.exports = ComentaryModel; 