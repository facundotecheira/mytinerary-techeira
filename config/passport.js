const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const Usersmodel = require('../models/Usersmodel')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY 
},(jwt_payload,done)=>{
    Usersmodel.findOne({_id:jwt_payload._doc._id})
    .then(persona => {
        if (persona) {
            console.log('toy aca')
            return done(null, persona)
        }else{
            console.log('llegue aca')
            return done(null, false)
        }
    })
    .catch(err => {
        console.log(err)
        return done(err,false)
    })

}))
