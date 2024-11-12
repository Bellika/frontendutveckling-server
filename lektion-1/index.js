const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const morgan = require('morgan')

const logger = require('./logger')
const passwordGenerator = require('./passwordGenerator')

const app = express()
const PORT = 3000

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(logger)
app.use(passwordGenerator)

//res.json({message: 'Hello World'})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')  
})

app.post('/submit', (req, res) => {
  res.send(`<p>Your password is: ${password}.`)
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})