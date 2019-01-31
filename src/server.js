const express = require('express')
var morgan  = require('morgan')
const debug = require('debug')
const argv = require('yargs').argv

const app = express()
app.use(morgan('combined'))
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))