// const mongoose = require('mongoose')

// mongoose.connect("mongodb://127.0.0.1:27017/peopleDB").catch((err)=> console.log(err))


// const Schema = mongoose.Schema

// const personSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   age: Number
// })

// const Person = mongoose.model('person', personSchema, 'persons');

// Person.find({}).then(function (people) {
//     console.log(people)
// })

// //update
// Person.findByIdAndUpdate("5c16c63bc5ad73471c3ca323", { age: 70 }, { new: true }).then( function (person) {
//     console.log(person)
// })


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

const Person = mongoose.model("person", personSchema)
module.exports = Person