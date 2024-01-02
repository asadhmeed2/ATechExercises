const mongoose = require('mongoose')
const SolarSystem = require('./models/SolarSystem')
const Planet = require('./models/Planet')
const Visitor = require('./models/Visitor')

const {PLANET_MODEL_NAME} = require('./config/config')
const { log } = require('console')

mongoose.connect('mongodb://localhost/test-db', {})


let solarSystem = new SolarSystem(
{
    planets:[],
    starName:'milky way'
}) 

let planet = new Planet({
    system:solarSystem,
    name:'earth',
    visitors:[],
})

let planet2 = new Planet({
    system:solarSystem,
    name:'moon',
    visitors:[],
})

let visitor = new Visitor({
    name:'asad',
    homePlanet:planet,
    visitedPlanets:[]
})

// solarSystem.save()
// planet2.save()
// visitor.save()

// solarSystem.planets.push(planet);
// solarSystem.planets.push(planet2);
// planet2.visitors.push(visitor);
// visitor.visitedPlanets.push(planet)

// SolarSystem.findByIdAndUpdate("65940b06fc3d6fd902671ef8",{planets:[planet,planet2]},{new:true}).then(data=>{
//     console.log(data);
// })

// Visitor.find({}).then(visitors=>{
    
//     Planet.findByIdAndUpdate("6594326d2418b7527b5d4630",{visitors:[visitors[0]]},{new:true}).then(data=>{
//         console.log(data);
//     })
// })

// planet2.updateOne()
// visitor.updateOne()


// Find a visitor’s list of visited planets
Visitor.find({},{_id: 0,visitedPlanets: 1}).populate("visitedPlanets").limit(1).then(function (visitors) {
    // console.log(visitors[0])
})

// Find all the visitors on a planet
Planet.find({},{_id: 0,visitors: 1}).populate("visitors").limit(1).then(function (planets) {
    // console.log(planets[0])
})

// Find all the visitors in a system ??
SolarSystem.aggregate([{
    $match:{_id: new mongoose.Types.ObjectId("65940b06fc3d6fd902671ef8")}
},
{
    $lookup: {
        from: 'planets', 
        localField: 'planets',
        foreignField: '_id',
        as: 'populatedPlanets'
    }
},
{
    $unwind: '$populatedPlanets'
},

{
    $lookup: {
      from: 'visitors', 
      localField: 'populatedPlanets.visitors',
      foreignField: '_id',
      as: 'populatedVisitors'
    }
  },

{
    $group: {
        _id: null,
        visitors: { $push: '$populatedVisitors' }
      }
}
])
.then(solarSystem=>{
    console.log(JSON.stringify(solarSystem));
})


