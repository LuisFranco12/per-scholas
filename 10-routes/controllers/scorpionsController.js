const scorpions = require('../models/scorpions')

function index(req, res) {
    res.render('scorpions/Index', { scorpions })
}

function show(req, res) {
    res.render('scorpions/Show', { scorpion: scorpions[req.params.index] })
}

module.exports = { index, show }