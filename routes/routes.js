const Router = require('express').Router()
const galeryControllers = require('../controllers/galeryControllers')

const {getGalery,postGalery} = galeryControllers

Router.route('/galery')
.get(getGalery)
.post(postGalery)

module.exports = Router