

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

    postItinerary: (req, res) => {

        const itineraries = new Itinerarymodel( req.body ).save()
        .then((response) => res.json({ response }))

    }
    // updateGalery: async (req, res) => {

    //     let id = req.params.id
    //     let city = req.body
    //     let actualizado
    //     console.log(city)
    //     try {
    //         actualizado = await Citymodel.findOneAndUpdate({ _id: id }, city, { new: true })
    //         console.log(actualizado)
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     res.json({ success: actualizado ? true : false })

    // },
    // deleteGalery: async(req,res)=>{
    //     const id = req.params.id
    //     let city
    //     try{
    //         await Citymodel.findOneAndDelete({_id:id})
    //         city = await Citymodel.find()

    //     }catch(error){
    //         console.log(error)
    //     }

    //     res.json({response: city , success:true})
    // },

}

module.exports = itineraryControllers