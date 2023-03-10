const express = require('express')

const router = express.Router()

const arachnidsController = require('../controllers/arachnidsController')


router.get('/', arachnidsController.index)

router.get('/:index', arachnidsController.show)


module.exports = router