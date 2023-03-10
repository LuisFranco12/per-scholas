const cats = require('../models/cats')

function index(req, res) {
    res.render('cats/Index', { cats })
}

function show(req, res) {
    res.render('cats/Show', { cat: cats[req.params.index] })
}

module.exports = { index, show }