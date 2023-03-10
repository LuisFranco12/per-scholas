const express = require('express')

const router = express.Router()

const whalesController = require('../controllers/whalesController')


router.get('/', whalesController.index)

router.get('/:index', whalesController.show)


module.exports = router