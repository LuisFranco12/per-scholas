const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080
let numberOfBeers = 99

app.get('/beers/', (req, res) => {
    numberOfBeers = 99
    res.send(`<div>
                99 Bottles of beer on the wall
                <a href="/beers/${--numberOfBeers}">take one down, pass it around</a>
              <div>`)
})

app.get('/beers/:number', (req, res) => {
    if(req.params.number === '0') {
        res.send(`<div>
        no more bottles
        <a href="/beers/">start Over</a>
        </div>`)
    }else {
        res.send(`<div>
                ${numberOfBeers} Bottles of beer on the wall
                <a href="/beers/${--numberOfBeers}">take one down, pass it around</a>
              <div>`)
    }

})
// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})