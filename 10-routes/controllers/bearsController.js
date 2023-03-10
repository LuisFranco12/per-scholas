const bears = require('../models/bears')

function index(req, res) {
    res.render('bears/Index', { bears })
}

function show(req, res) {
    res.render('bears/Show', { bear: bears[req.params.index] })
}

module.exports = { index, show }