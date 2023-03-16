const express = require('express');
require('dotenv').config()

const app  = express();

const PORT = 8080;

const connectDB = require('./config/db')

connectDB();

const methodOverride = require('method-override');

const logRoutes = require('./routes/logRoutes')

const {createEngine} = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/logs', logRoutes)

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})