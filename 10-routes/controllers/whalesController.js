const whales = require('../models/whales')

function index(req, res) {
    res.render('whales/Index', { whales })
}

function show(req, res) {
    res.render('whales/Show', { whale: whales[req.params.index] })
}

module.exports = { index, show }