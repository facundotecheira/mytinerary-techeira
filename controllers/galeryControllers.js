// let galery = [

//     { ruta: 'japang.jpg', title: 'Tokyo',country: "Japan" },
//     { "ruta": "canada.jpg", "title": "Vancouver","country": "Canada" },
//      {"ruta": "norway.jpg", "title": "Oslo","country": "Norway" },
//     { "ruta": "Stockholm.jpg", "title": "Stockholm","country":"Sweden" },
//     { "ruta": "copenhagen.jpg", "title": "Copenhagen","country": "Denmark" },
//     { "ruta": "helsinki.jpg", "title": "Helsinki", "country":"Finland" },
//     { "ruta": "hamburg.jpg", "title": "Hamburg","country": "Germany" },
//     { "ruta": "zurich.jpg", "title": "Zurich","country": "Switzerland" },
//     { "ruta": "seul.jpg", "title": "Seoul", "country":"South Korea" },
//     { "ruta": "paris.jpg", "title": "Paris","country": "France" },
//     { "ruta": "newyork.jpg", "title": "New York", "country": "EE.UU" },
//     { "ruta": "venecia.jpg", "title": "Venice","country": "Italy" },
//     { "ruta": "boston.jpg", "title": "Boston","country": "EE.UU" },
//     { "ruta": "amsterdam.jpg", "title": "Amsterdam","country": "Holanda" },
//     { "ruta": "dublin.jpg", "title": "Dublin","country": "Ireland" }

// ]

const { response } = require('express')
const Citymodel = require('../models/Citymodel')

const galeryControllers = {
    getGalery: async (req, res) => {
        let cities
        let error = null
        try {
            cities = await Citymodel.find()
        } catch (error) {
            error = error
            console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : cities,
            succes: error ? false : true,
            error: error
        })
        // .then((response)=> res.json({response}))

    },
    getAcity: async (req, res) => {
        let city
        const id = req.params.id
        try {
            city = await Citymodel.findOne({ _id: id })
        } catch (error) {
            console.log(error)
        }
        res.json({ response: city, success: true })
    },
    postGalery: (req, res) => {

        const { path, title, country, currency, language } = req.body
        const citi = new Citymodel({ path, title, country, currency, language }).save()
            .then((response) => res.json({ response }))

    },
    updateGalery: async (req, res) => {

        let id = req.params.id
        let city = req.body
        let actualizado
        console.log(city)
        try {
            actualizado = await Citymodel.findOneAndUpdate({ _id: id }, city, { new: true })
            console.log(actualizado)
        } catch (error) {
            console.log(error)
        }
        res.json({ success: actualizado ? true : false })

    },
    deleteGalery: async(req,res)=>{
        const id = req.params.id
        let city
        try{
            await Citymodel.findOneAndDelete({_id:id})
            city = await Citymodel.find()

        }catch(error){
            console.log(error)
        }

        res.json({response: city , success:true})
    },

}

module.exports = galeryControllers