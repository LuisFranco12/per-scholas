const arachnids = require('../models/arachnids')

function index(req, res) {
    res.render('arachnids/Index', { arachnids })
}

function show(req, res) {
    res.render('arachnids/Show', { arachnid: arachnids[req.params.index] })
}

module.exports = { index, show }