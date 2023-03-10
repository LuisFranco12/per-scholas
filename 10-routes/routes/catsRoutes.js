
const express = require('express')

const router = express.Router()

const catsController = require('../controllers/catsController')


router.get('/', catsController.index)

router.get('/:index', catsController.show)


module.exports = router