const express = require('express')
const app = express()

const tipCalcuator = require('./models/Tip-Calculator')
const response = require('./models/Magic-8-Ball')
const PORT = 8081;


app.get('/greeting/', (req, res) => {
    res.send(`<h1>Hello stranger</h1>`)
})

app.get('/magic/:question', (req, res) => {
    res.send(`<h1>${response()}</h1>`)
})

app.get('/tip/:total/:percent', (req, res) => {
    const tip = tipCalcuator(req.params.total, req.params.percent)
    res.send(`<h1>${tip}</h1>`)
})

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>What's up, ${req.params.name}</h1>`)
})



app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})