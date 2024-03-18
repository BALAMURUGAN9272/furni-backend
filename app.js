const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config')
const usersrouter = require('./controllers/users')
const loginrouter = require('./controllers/Login')

mongoose.set('strictQuery',false)
mongoose.connect(config.mongodb_uri)
.then(() =>{
    console.log('connected to mongo db')
})
.catch((err) => {
    console.log(err)
})

app.use(cors())
app.use(express.json())

app.use('/api/users',usersrouter)
app.use('/api/login',loginrouter)


module.exports = app