const express = require('express')
const router = express.Router()

router.get('/generateImage', (req, res) => {
    console.log('From Open AI endpoint...')
})

module.exports = router;