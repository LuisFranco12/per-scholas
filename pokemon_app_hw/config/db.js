const mongoose = require('mongoose')

const db = process.env.Mongo_URL

const connectDB = async() => {
    try{
        await mongoose.connect(db, { useNewUrlParser: true })
        console.log('MongoDB connected...')
    }catch(err) {
        console.error(err.message)
    }
}

module.exports = connectDB