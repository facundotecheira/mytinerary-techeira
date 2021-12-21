const ComentaryModel = require('../models/ComentaryModel')

const comentaryControllers = {

    newComment: async(req,res) =>{
        let { comentary, userId, itinerary } = req.body   

        const nuevoComentario = new ComentaryModel({
            comentary,
            userId,
            itinerary,
            
            
        })
        await nuevoComentario.save()
        return res.json({success: true, response: {nuevoComentario}, error: null})
       

    },
    getOneComentary: async (req, res) => {
        let comentary
        const id = req.params.id
        try {
            comentary = await ComentaryModel.find()
    
        } catch (error) {
            console.log(error)
        }
        res.json({ response: comentary, success: true })
    }


}


module.exports = comentaryControllers