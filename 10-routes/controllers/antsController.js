const ants = require('../models/ants')

function index(req, res) {
    res.render('ants/Index', { ants })
}

function show(req, res) {
    res.render('ants/Show', { ant: ants[req.params.index] })
}

module.exports = { index, show }