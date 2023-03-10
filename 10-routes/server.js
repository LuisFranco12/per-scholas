const express = require('express')

const app = express()

const PORT = 8080

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

const dogsRoutes = require('./routes/dogsRoutes')
const catsRoutes = require('./routes/catsRoutes')
const birdsRoutes = require('./routes/birdsRoutes')
const bearsRoutes = require('./routes/bearsRoutes')
const arachnidsRoutes = require('./routes/arachnidsRoutes')
const antsRoutes = require('./routes/antsRoutes')
const horsesRoutes = require('./routes/horsesRoutes')
const scorpionsRoutes = require('./routes/scorpionsRoutes')
const snakesRoutes = require('./routes/snakesRoutes')
const whalesRoutes = require('./routes/whalesRoutes')










app.use('/dogs', dogsRoutes)
app.use('/cats', catsRoutes)
app.use('/birds', birdsRoutes)
app.use('/bears', bearsRoutes)
app.use('/arachnids', arachnidsRoutes)
app.use('/ants', antsRoutes)
app.use('/horses', horsesRoutes)
app.use('/scorpions', scorpionsRoutes)
app.use('/snakes', snakesRoutes)
app.use('/whales', whalesRoutes)








app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})