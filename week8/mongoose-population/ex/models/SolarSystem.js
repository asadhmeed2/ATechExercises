const mongoose = require('mongoose')
const Schema = mongoose.Schema

const {PLANET_MODEL_NAME,SOLARSYSTEM_MODEL_NAME} = require('../config/config')

const solarSystemSchema = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref:PLANET_MODEL_NAME }],
    starName: String,
})

const SolarSystem = mongoose.model(SOLARSYSTEM_MODEL_NAME, solarSystemSchema)
module.exports = SolarSystem