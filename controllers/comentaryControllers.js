const ComentaryModel = require('../models/ComentaryModel')

const comentaryControllers = {

    newComment: async(req,res) =>{
        const comentary = new ComentaryModel( req.body ).save()
        .then((response) => res.json({ response }))

    }


}


module.exports = comentaryControllers