const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PokemonSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true}
})

const Pokemon = mongoose.model('pokemon', PokemonSchema)

module.exports = Pokemon