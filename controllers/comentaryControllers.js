const ComentaryModel = require('../models/ComentaryModel')

const comentaryControllers = {

    newComment: async(req,res) =>{
        const comentary = new ComentaryModel( req.body ).save()
        .then((response) => res.json({ response }))

    },
    getOneComentary: async (req, res) => {
        let comentary
        const id = req.params.id
        try {
            comentary = await ComentaryModel.findOne({ itinerary: id })
    
        } catch (error) {
            console.log(error)
        }
        res.json({ response: comentary, success: true })
    }


}


module.exports = comentaryControllers