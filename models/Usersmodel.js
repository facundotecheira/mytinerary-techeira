const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    password: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    url: {type:String, required:true},
    country: {type:String, required:true},
    
    
})

const Usersmodel = mongoose.model('user', usersSchema)

module.exports = Usersmodel;