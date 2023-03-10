const express = require('express')

const router = express.Router()

const antsController = require('../controllers/antsController')


router.get('/', antsController.index)

router.get('/:index', antsController.show)


module.exports = router