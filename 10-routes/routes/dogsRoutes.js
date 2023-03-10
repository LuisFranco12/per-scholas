
const express = require('express')

const router = express.Router()

const dogsController = require('../controllers/dogsController')


router.get('/', dogsController.index)

router.get('/:index', dogsController.show)


module.exports = router