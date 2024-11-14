const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const passwordCheck = require('./middleware/passwordCheck')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(passwordCheck)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.post('/login', (req, res) => {
  if (req.userIsAuthorised) {
    res.sendFile(path.join(__dirname, '../public/secret.html'))
  } else {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})