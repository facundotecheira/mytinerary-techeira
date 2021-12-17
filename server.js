require('dotenv').config();
const express = require ('express');
const { response } = require('express');
const Router = require('./routes/routes')
const cors = require('cors');
const passport = require('passport')
require('./config/database')
require('./config/passport')

// middlewares

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize())

app.use('/api',Router)

app.listen(4000,()=>{
    console.log('server on port 4000');
})