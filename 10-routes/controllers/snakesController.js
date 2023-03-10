const snakes = require('../models/snakes')

function index(req, res) {
    res.render('snakes/Index', { snakes })
}

function show(req, res) {
    res.render('snakes/Show', { snake: snakes[req.params.index] })
}

module.exports = { index, show }