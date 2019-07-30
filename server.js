const path = require('path')
const fs = require('fs-extra')
const express = require('express')
const app = express()
const port = 3000

function displayHtml(res) {
  fs.readFile(path.join(__dirname, 'home'), function(err, data) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' })
      return res.end('It borked Jim!')
    }
    res.writeHead(200, { 'Content-Type': 'text/html' })
    return res.end(data)
  })
}

const handleRequest = (req, res) => {
  const { url } = req
  console.log(url)
  switch (url) {
    case '/':
      return displayHtml('home', res)
    case '/survey':
      return displayHtml('survey', res)
    default:
      displayHtml('home', res)
  }
}

app.use(express.static(path.join(__dirname, '/app/public')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
