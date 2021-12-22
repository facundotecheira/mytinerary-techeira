const Router = require('express').Router()
const galeryControllers = require('../controllers/galeryControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const usersControllers = require('../controllers/usersControllers')
const activityController =  require('../controllers/activityController')
const comentaryControllers = require('../controllers/comentaryControllers')
const validator = require('../config/validator')

const passport = require('passport')
const { Route } = require('express')


const {getGalery,postGalery,updateGalery,getAcity,deleteGalery} = galeryControllers
const {getItinerary,postItinerary,getAItineraryForACity,getAItinerary,updateItinerary,deleteItinerary} = itineraryControllers
const {newUser, userLoged,verifyToken} = usersControllers
const {newComment,getComentary,updateComentary,deleteComentary} = comentaryControllers
const {getActivieties,addNewActivities} = activityController
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

// path to verify the token

Router.route ("/verifyToken")
.get(passport.authenticate('jwt', {session:false}),verifyToken)


// activieties path

// Router.route('/activities/:id')
// .get(getActivieties)

Router.route('/activities')
.post(addNewActivities)
.get(getActivieties)

// commentary path


Router.route('/comentary/:id')
.put(updateComentary)
.delete(deleteComentary)


Router.route('/comentary')
.get(getComentary)
.post(newComment)


module.exports = Router