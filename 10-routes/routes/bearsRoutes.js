const express = require('express')

const router = express.Router()

const bearsController = require('../controllers/bearsController')


router.get('/', bearsController.index)

router.get('/:index', bearsController.show)


module.exports = router