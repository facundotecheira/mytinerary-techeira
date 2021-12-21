const ComentaryModel = require('../models/ComentaryModel')

const comentaryControllers = {

    newComment: async (req, res) => {
        let { comentary, userId, itinerary } = req.body

        const nuevoComentario = new ComentaryModel({
            comentary,
            userId,
            itinerary,


        })
        await nuevoComentario.save()
        return res.json({ success: true, response: { nuevoComentario }, error: null })


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
    },
    updateComentary: async (req, res) => {

        let id = req.params.id
        let comentary = req.body
        let actualizado
     
        try {
            actualizado = await ComentaryModel.findOneAndUpdate({ _id: id }, comentary, { new: true })
            console.log(actualizado)
        } catch (error) {
            console.log(error)
        }
        res.json({ response: actualizado, success: true })

    }


}


module.exports = comentaryControllers