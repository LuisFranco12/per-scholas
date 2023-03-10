const birds = require('../models/birds')

function index(req, res) {
    res.render('birds/Index', { birds })
}

function show(req, res) {
    res.render('birds/Show', { bird: birds[req.params.index] })
}

module.exports = { index, show }