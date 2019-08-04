const express = require('express')
const router = express.Router()
const { friends, newFriend } = require('../data/friends')

// triggered by link in footer just displays the friends array in json format
router.get('/api/friends', (req, res) => {
  res.json(friends)
})

// handles post request from survey form
// not sure how to send the response back to html to build out the matching friend?
router.post('/survey/complete', (req, res) => {
  res.json(newFriend(req.body))
})

module.exports = router
