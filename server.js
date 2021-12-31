require('dotenv').config();
const express = require ('express');
const { response } = require('express');
const Router = require('./routes/routes')
const cors = require('cors');
const passport = require('passport')
require('./config/database')
require('./config/passport')
const path = require('path')
// middlewares

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize())

app.use('/api',Router)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

app.listen(process.env.PORT || 4000,process.env.HOST || "0.0.0.0",()=>{
    console.log(`server on port ${process.env.PORT || 4000}`);
})