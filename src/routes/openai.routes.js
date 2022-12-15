const express = require('express')
const router = express.Router()
const { generateImage } = require('../controllers/openai.controller')

router.post('/generateImage', generateImage)

module.exports = router;