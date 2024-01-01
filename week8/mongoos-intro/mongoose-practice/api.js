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

        Person.create(person).then( function (data){
            console.log(data);
            res.status(201).json(data)
        })
    }catch(error){
        console.error(error);
    }
})

router.put('/:id', function (req, res) {
    const personId = req.params.id;
    const person = req.body
    
        Person.findByIdAndUpdate(personId,person,{new:true}).then( function (data){
            console.log(data);
            res.status(201).json(data)
        }).catch(error=>{
            console.error(error);
        })
    
})

router.delete ('/:id', function (req, res) {
    const personId = req.params.id;
    
        Person.findByIdAndDelete(personId).then( function (data){
            console.log(data);
            res.status(201).json(data)
        }).catch(error=>{
            console.error(error);
            res.status(404).send({message: error.message});
        })
    
})



module.exports = router