const mongoose = require('mongoose')

const Schema = mongoose.Schema

const logSchema = new Schema({
    title: {type: String},
    entry: {type: String},
    shipIsBroken: {type: Boolean, default: true},
}, { timestamps: true })

const Logs = mongoose.model('logs', logSchema)

module.exports = Logs