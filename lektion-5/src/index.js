const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use(express.json())

app.use('/api/notes', require('./routes/noteRoutes'))

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})