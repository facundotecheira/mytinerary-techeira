const Router = require('express').Router()
const galeryControllers = require('../controllers/galeryControllers')

const {getGalery} = galeryControllers

Router.route('/galery')
.get(getGalery)


module.exports = Router