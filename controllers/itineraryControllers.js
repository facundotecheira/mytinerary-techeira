

const { response } = require('express')
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

        const itineraries = new Itinerarymodel( req.body ).save()
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
    deleteItinerary: async(req,res)=>{
        const id = req.params.id
        let itinerary
        try{
            await Itinerarymodel.findOneAndDelete({_id:id})
            itinerary = await Itinerarymodel.find()

        }catch(error){
            console.log(error)
        }

        res.json({response: itinerary , success:true})
    },

}

module.exports = itineraryControllers