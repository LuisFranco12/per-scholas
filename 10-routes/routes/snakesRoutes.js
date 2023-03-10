const express = require('express')

const router = express.Router()

const snakesController = require('../controllers/snakesController')


router.get('/', snakesController.index)

router.get('/:index', snakesController.show)


module.exports = router