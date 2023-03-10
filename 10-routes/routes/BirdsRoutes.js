const express = require('express')

const router = express.Router()

const birdsController = require('../controllers/birdsController')


router.get('/', birdsController.index)

router.get('/:index', birdsController.show)


module.exports = router