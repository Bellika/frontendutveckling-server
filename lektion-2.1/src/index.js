const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const crimeData = require('./data/crime.json')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.post('/crime', (req, res) => {
  const choice = req.body.choice

  const filteredData = crimeData.filter((entry) => entry.type === choice)

  res.json(filteredData)
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})