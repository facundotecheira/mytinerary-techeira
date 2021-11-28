const Router = require('express').Router()
const galeryControllers = require('../controllers/galeryControllers')

const {getGalery,postGalery,updateGalery,getAcity,deleteGalery} = galeryControllers

Router.route('/galery')
.get(getGalery)
.post(postGalery)


Router.route('/galery/:id')
.put(updateGalery)
.get(getAcity)
.delete(deleteGalery)
module.exports = Router