const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const htmlRoutes = require('./app/routing/htmlRoutes')
const apiRoutes = require('./app/routing/apiRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// allows use of the routes in the htmlRoutes and apiRoutes files
app.use(htmlRoutes)
app.use(apiRoutes)

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
