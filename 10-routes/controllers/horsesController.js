const horses = require('../models/horses')

function index(req, res) {
    res.render('horses/Index', { horses })
}

function show(req, res) {
    res.render('horses/Show', { horse: horses[req.params.index] })
}

module.exports = { index, show }