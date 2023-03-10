const express = require('express')

const router = express.Router()

const scorpionsController = require('../controllers/scorpionsController')


router.get('/', scorpionsController.index)

router.get('/:index', scorpionsController.show)


module.exports = router