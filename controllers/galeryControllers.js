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
    getGalery: (req,res)=>{
        
        const cities = Citymodel.find()
        .then((response)=> res.json({response}))
        
    },
    postGalery: (req,res)=>{
        
        const {path,title,country,currency,language} = req.body
        const citi = new Citymodel({path,title,country,currency,language}).save()
        .then((response)=>res.json({response}))
        
    }
}

module.exports = galeryControllers