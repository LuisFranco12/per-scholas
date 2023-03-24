// I.N.D.U.C.E.S
const Destinations = require('../models/destinationModels')
const Flights = require('../models/flightModel')
const flights = require('../models/flights')

module.exports.seed = async(req, res) => {
    await Flights.deleteMany
    await Flights.create(flights)
    res.redirect('/flights')
}

module.exports.index = async (req, res) => {
    const flights = await Flights.find().sort({departs: 1})
    console.log(flights)
    res.render('Index', {flights})
}

module.exports.new = async function(req, res) {
    const newFlight = new Flights()
    const dt = newFlight.departs
    const departsDate = dt.toISOString().slice(0, 16)

    res.render('New', {departsDate})
}

module.exports.delete = async(req, res) => {
    const flight = await Flights.findByIdAndDelete(req.params.id)
    // delete all comments where the comment id 
    await Destinations.deleteMany({ _id: { 
        // equals/matches any comment ids in this array
        $in: flight.destinations 
    }})
    res.redirect('/flights')
}

module.exports.create = async function(req, res) {
    try {
        await Flights.create(req.body)
        res.redirect('/flights')
    } catch(err) {
        console.log(err.message)
    }
}

module.exports.show = async function(req, res) {
    const flight = await Flights.findById(req.params.id).populate({
        path:'destinations',
        options:{
            sort:{'arrival': 1}
        }
    })

    const newFlight = new Flights()
    const dt = newFlight.departs
    const departsDate = dt.toISOString().slice(0, 16)

    res.render('Show', { flight, departsDate})

}
// Seed
module.exports.clear = async function(req, res) {
    try {
        await Flights.deleteMany({})
        res.redirect('/flights')
    }catch(err) {
        console.log(err)
        res.send(err.message)
    }

}

// Destinations

module.exports.createDestination = async(req, res) => {
    
    const destination = await Destinations.create(req.body)

    await Flights.findByIdAndUpdate(req.params.id, {
        $push: {
            destinations: destination._id
        }
    })
    res.redirect(`/flights/${req.params.id}`)
}

