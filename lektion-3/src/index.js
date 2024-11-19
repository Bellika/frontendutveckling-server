const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))

//const response = await axios.get('https://api.api-ninjas.com/v1/randomuser', {
//  headers: {
//    'X-Api-Key': process.env.NINJA_API_KEY
//  }
//})
//const result = response.data
app.get('/', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  } catch (error) {
    console.error('Failed to make request:', error.message)
    res.json(error.message)
  }
})

app.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const category = req.body.category
    const url = category ? `https://api.api-ninjas.com/v1/hobbies?category=${category}` : `https://api.api-ninjas.com/v1/hobbies`
    const response = await axios.get(
      url, {
        headers: {
          'X-Api-Key': process.env.NINJA_API_KEY 
        }
      }
    )
    const result = response.data
    console.log(result)
    res.json(result)
  } catch (error) {
    console.log('Failed to make request:', error.message)
    res.json(error.message)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})