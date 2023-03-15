require('dotenv').config()

const express = require('express')

const app = express()

const PORT = 5000

const connectDB = require('./config/db')

connectDB();

const methodOverride = require('method-override')

// const pokemon = require('./models/pokemon')
const Routes = require('./routes/Routes')

const {createEngine} = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.use('/pokemon', Routes)


app.listen(PORT, () => {
    console.log('listening on port: 5000')
})