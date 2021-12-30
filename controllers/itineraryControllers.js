const Itinerarymodel = require('../models/ItineraryModel')

const itineraryControllers = {
    getItinerary: async (req, res) => {
        let itineraries
        let error = null
        try {
            itineraries = await Itinerarymodel.find()
        } catch (error) {
            error = error
            console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : itineraries,
            succes: error ? false : true,
            error: error
        })


    },

    getAItineraryForACity: async (req, res) => {
        let itineraries
        const id = req.params.id
        try {
            itineraries = await Itinerarymodel.find({ cities: id })
        } catch (error) {
            console.log(error)
        }
        res.json({ response: itineraries, success: true })
    },

    getAItinerary: async (req, res) => {
        let itinerary
        const id = req.params.id
        try {
            itinerary = await Itinerarymodel.findOne({ _id: id })
            console.log(itinerary)
        } catch (error) {
            console.log(error)
        }
        res.json({ response: itinerary, success: true })
    },

    postItinerary: (req, res) => {

        const itineraries = new Itinerarymodel(req.body).save()
            .then((response) => res.json({ response }))

    },
    updateItinerary: async (req, res) => {

        let id = req.params.id
        let itinerary = req.body
        let actualizado
        console.log(itinerary)
        try {
            actualizado = await Itinerarymodel.findOneAndUpdate({ _id: id }, itinerary, { new: true })
            console.log(actualizado)
        } catch (error) {
            console.log(error)
        }
        res.json({ success: actualizado ? true : false })

    },
    deleteItinerary: async (req, res) => {
        const id = req.params.id
        let itinerary
        try {
            await Itinerarymodel.findOneAndDelete({ _id: id })
            itinerary = await Itinerarymodel.find()

        } catch (error) {
            console.log(error)
        }

        res.json({ response: itinerary, success: true })
    },

    likeItinerary: (req, res) => {
        let idUser = req.body
        Itinerarymodel.findOne({ _id: req.params.id })
            .then((itinerary) => {
               

                if (itinerary.likes.includes(idUser.idUser)) {
                    console.log('toy aca')
                    Itinerarymodel.findOneAndUpdate({ _id: req.params.id }, { $pull: { likes: idUser.idUser} }, { new: true })
                    .then((newItinerary) => res.json({ success: true, response: newItinerary.likes }))
                    .catch((error) => console.log(error))

                }
                else {
                    console.log('ahora toy aca')
                    Itinerarymodel.findOneAndUpdate({ _id: req.params.id }, { $push: { likes: idUser.idUser} }, { new: true })
                        .then((newItinerary) => res.json({ success: true, response: newItinerary.likes }))
                        .catch((error) => console.log(error))
                }
            })
        .catch((error) => res.json({ success: false, response: error }))
    }

}

module.exports = itineraryControllers



