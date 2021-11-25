const amigos = ['pedro','juan','ana','nose','facu']

let galery = [

    { ruta: 'japang.jpg', title: 'Tokyo' },
    { ruta: 'canada.jpg', title: 'Vancouver' },
    { ruta: 'norway.jpg', title: 'Oslo' },
    { ruta: 'Stockholm.jpg', title: 'Stockholm' },
    { ruta: 'copenhagen.jpg', title: 'Copenhagen' },
    { ruta: 'helsinki.jpg', title: 'Helsinki' },
    { ruta: 'hamburg.jpg', title: 'Hamburg' },
    { ruta: 'zurich.jpg', title: 'Zurich' },
    { ruta: 'seul.jpg', title: 'Seoul' },
    { ruta: 'paris.jpg', title: 'Paris' },
    { ruta: 'newyork.jpg', title: 'New York' },
    { ruta: 'venecia.jpg', title: 'Venice' }

]

const express = require ('express');
const cors = require('cors');
const { response } = require('express');


const app = express();

app.use(cors());


app.get('/galery',(req,res)=>{
    res.json({response:{galery}})
    
})


app.listen(4000,()=>{
    console.log('server on port 4000');
})