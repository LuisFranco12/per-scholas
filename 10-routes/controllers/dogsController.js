const dogs = require('../models/dogs')

function index(req, res) {
    res.render('dogs/Index', { dogs })
}

function show(req, res) {
    res.render('dogs/Show', { dog: dogs[req.params.index] })
}

module.exports = { index, show }