const express = require('express')

const app = express()

const PORT = 8080

// const pokemon = require('./models/pokemon')
const indexRoute = require('./routes/indexRoute')

const {createEngine} = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.use('/pokemon', indexRoute)


app.listen(PORT, () => {
    console.log('listening on port: 8080')
})