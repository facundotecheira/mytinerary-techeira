const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const Usersmodel = require('../models/Usersmodel')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY 
},(jwt_payload,done)=>{
    Usersmodel.findOne({_id:jwt_payload._doc._id})
    .then(persona => {
        if (persona) {
            
            return done(null, persona)
        }else{
            
            return done(null, false)
        }
    })
    .catch(err => {
        console.log(err)
        return done(err,false)
    })

}))
