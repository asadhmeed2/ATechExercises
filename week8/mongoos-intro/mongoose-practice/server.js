// Server setup
const express = require('express')
const app = express()
const api = require('./api')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {})
.catch((err)=> console.log(err))

app.use('/people', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})