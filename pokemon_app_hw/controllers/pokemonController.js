let pokemon = require('../models/pokemon')

module.exports.index = function(req, res) {
    // res.send(fruits)
    res.render('Index', { pokemon })
}

module.exports.show = function (req, res) {
    res.render('Show', { pokemon: pokemon[req.params.id] })
}