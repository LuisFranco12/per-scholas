const express = require('express')

const router = express.Router()

const horsesController = require('../controllers/horsesController')


router.get('/', horsesController.index)

router.get('/:index', horsesController.show)


module.exports = router