const express = require('express')
const path = require('path')
const router = express.Router()

// displays home page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'home.html'))
})

// displays survey html page, triggered by button on home page
router.get('/survey', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'survey.html'))
})

// exports the get requests to the server
module.exports = router
