const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {PLANET_MODEL_NAME,SOLARSYSTEM_MODEL_NAME,VISITOR_MODEL_NAME} = require('../config/config')

const planetSchema = new Schema({
    name : String ,
    system : {type:Schema.Types.ObjectId,ref: SOLARSYSTEM_MODEL_NAME},
    visitors : [{type:Schema.Types.ObjectId,ref: VISITOR_MODEL_NAME}]
})


const Planet = mongoose.model(PLANET_MODEL_NAME, planetSchema)
module.exports = Planet