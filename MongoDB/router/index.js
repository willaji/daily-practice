const express = require('express')
const router = express.Router()
const Movie = require('../models/movies')

router.get('/',(req,res) => {
    res.send('Hello world')
})

module.exports = router
