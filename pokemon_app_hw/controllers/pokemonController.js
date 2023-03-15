let pokemon = require('../models/pokemon')
const Pokemon = require('../models/PokemonModel')

module.exports.index = async function(req, res) {
    const pokemonData = await Pokemon.find()
    res.render('Index', { pokemon: pokemonData })
}

module.exports.show = async function(req, res) {
    const pokemonData = await Pokemon.findById(req.params.id)
    console.log(pokemonData)
    res.render('Show', { pokemon:pokemonData })
}

module.exports.new = function(req, res) {
    res.render('New')
}

module.exports.create = async function(req, res) {
    try {
      await Pokemon.create(req.body)
    } catch(err) {
        console.log('error')
        res.send(err.message)
    }

    res.redirect('/pokemon')
}

module.exports.delete = async function(req, res) {
    try {
        await Pokemon.findByIdAndDelete(req.params.id)
        res.redirect('/pokemon')
    }catch {
        console.log(err)
        res.send(err.message)
    }
}