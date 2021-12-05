const Router = require('express').Router()
const galeryControllers = require('../controllers/galeryControllers')
const itineraryControllers = require('../controllers/itineraryControllers')

const {getGalery,postGalery,updateGalery,getAcity,deleteGalery} = galeryControllers
const {getItinerary,postItinerary,getAItineraryForACity,getAItinerary,updateItinerary,deleteItinerary} = itineraryControllers
// routes of the cities

Router.route('/galery')
.get(getGalery)
.post(postGalery)

Router.route('/galery/:id')
.put(updateGalery)
.get(getAcity)
.delete(deleteGalery)

// routes of the itineraries

Router.route('/itinerary')
.get(getItinerary)
.post(postItinerary)

Router.route('/itinerary/:id')
.get(getAItinerary)
.put(updateItinerary)
.delete(deleteItinerary)

Router.route('/itinerary/galery/:id')
.get(getAItineraryForACity)

module.exports = Router