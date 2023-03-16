const Logs = require('../models/logs')

module.exports.index = async(req, res) => {
    const allLogs = await Logs.find()
    res.render('Index', { logs: allLogs })
}

module.exports.new = (req, res) => {
    res.render('New')
}

module.exports.delete = async function(req, res) {
    try {
        await Logs.findByIdAndDelete(req.params.id)
        res.redirect('/Logs')
    }catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.update = async (req, res) => {
    if(req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    }else {
        req.body.shipIsBroken = false
    }

    try {
        await Logs.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/logs/${req.params.id}`)
    }catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.create = async (req, res) => {
    if(req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    }else {
        req.body.shipIsBroken = false
    }

    try {
        const log = await Logs.create(req.body)
        res.redirect(`/logs/${log.id}`)

    }catch(err) {
        res.send(err.message)
    }
}

module.exports.edit = async (req, res) => {
    const log = await Logs.findById(req.params.id)
    res.render('Edit', { log: log })
}

module.exports.show = async (req, res) => {
    const log = await Logs.findById(req.params.id)
    let date = log.createdAt.toString().slice(0, 24)
    res.render('Show', { log: log, date: date })
    console.log()
}