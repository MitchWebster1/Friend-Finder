// const path = require('path')
// const fs = require('fs-extra')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const htmlRoutes = require('./app/routing/htmlRoutes')
const apiRoutes = require('./app/routing/apiRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(express.static(path.join(__dirname, '/app/public')))
app.use(htmlRoutes)
app.use(apiRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
