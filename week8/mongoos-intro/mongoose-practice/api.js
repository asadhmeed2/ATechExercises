const express = require('express')
const router = express.Router()

const Person = require('./models/person')

router.get('/', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})

router.post('/', function (req, res) {
    const person = req.body
    try{

        Person.create(person).then( function (error,data){
            console.log(data);
        })
    }catch(error){
        console.error(error);
    }
})



module.exports = router