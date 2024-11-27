const express = require('express')
const db = require('./config/db')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

db.connect()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Failed to connect to the database:', err))

db.query('SELECT * FROM test', (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    const response = res.rows
    console.log(response)
  }
  db.end
})

app.use('/api/tests', require('./routes/testRoutes'))

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})