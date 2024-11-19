const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const PORT = 3000
const API_URL = 'https://jsonplaceholder.typicode.com/posts/'

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.post('/get-posts', async (req, res) => {
  try {
    const response = await axios.get(API_URL)
    const result = response.data
    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

app.post('/get-post', async (req, res) => {
  const searchId = req.body.id
  try {
    const response = await axios.get(API_URL + searchId)
    const result = response.data
    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

app.post('/create-post', async (req, res) => {
  const title = req.body.title
  const text = req.body.text
  try {
    const response = await axios.post(API_URL, {
      title: title,
      body: text,
      userId: 1,
    }, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const result = response.data
    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

//Complete update of whole resourse
app.post('/update-post', async (req, res) => {
  const searchId = req.body.id
  const title = req.body.title
  const text = req.body.text
  try {
    const response = await axios.put(API_URL + searchId, {
      title: title,
      body: text,
      userId: 1,
    }, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const result = response.data
    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

//Partial update, costs less resourse
app.post('/patch-post', async (req, res) => {
  const searchId = req.body.id
  const title = req.body.title
  const text = req.body.text
  try {
    const response = await axios.patch(API_URL + searchId, {
      title: title,
      body: text,
      userId: 1,
    }, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const result = response.data
    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

app.post('/delete-post', async (req, res) => {
  const searchId = req.body.id
  try {
    const response = await axios.delete(API_URL + searchId)
    const result = response.data
    res.send(result)
  } catch (error) {
    res.send(error)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})


