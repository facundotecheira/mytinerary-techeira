const Router = require('express').Router()
const galeryControllers = require('../controllers/galeryControllers')

const {getGalery,postGalery,updateGalery} = galeryControllers

Router.route('/galery')
.get(getGalery)
.post(postGalery)


Router.route('/galery/:id')
.put(updateGalery)

module.exports = Router