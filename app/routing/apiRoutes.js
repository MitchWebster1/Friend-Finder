const express = require('express')
const path = require('path')
const router = express.Router()
const { friends, newFriend } = require('../data/friends')

// router.get('/survey', (req, res) => {
//   res.json(friends)
// })

router.post('/survey', (req, res) => {
  // console.log(req.body)
  // newFriend(req.body)
  res.json(newFriend(req.body))
})

module.exports = router
