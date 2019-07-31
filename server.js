const path = require('path')
const fs = require('fs-extra')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '/app/public')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
