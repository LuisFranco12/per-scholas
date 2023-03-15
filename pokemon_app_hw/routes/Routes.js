// I.N.D.U.C.E.S
const express = require('express')

const router = express.Router()
const pokemonController = require('../controllers/pokemonController')

router.get('/', pokemonController.index)

router.get('/new', pokemonController.new)

router.delete('/:id', pokemonController.delete)

router.post('/', pokemonController.create)

router.get('/:id', pokemonController.show)

module.exports = router