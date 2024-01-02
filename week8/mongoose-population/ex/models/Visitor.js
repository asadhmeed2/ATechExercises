const mongoose = require('mongoose')
const Schema = mongoose.Schema

const {PLANET_MODEL_NAME,VISITOR_MODEL_NAME} = require('../config/config')

const visitorSchema = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref:PLANET_MODEL_NAME },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref:PLANET_MODEL_NAME }],
})

const Visitor = mongoose.model(VISITOR_MODEL_NAME, visitorSchema)
module.exports = Visitor