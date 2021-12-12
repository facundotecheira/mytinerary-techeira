const Router = require('express').Router()
const galeryControllers = require('../controllers/galeryControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const usersControllers = require('../controllers/usersControllers')
const validator = require('../config/validator')

const {getGalery,postGalery,updateGalery,getAcity,deleteGalery} = galeryControllers
const {getItinerary,postItinerary,getAItineraryForACity,getAItinerary,updateItinerary,deleteItinerary} = itineraryControllers
const {newUser, userLoged} = usersControllers

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


// routes of the users 

Router.route('/auth/signUp')
.post(validator,newUser)

Router.route('/auth/signIn')
.post(userLoged)


module.exports = Router