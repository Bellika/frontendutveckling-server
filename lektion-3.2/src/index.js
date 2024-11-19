const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const pokemonData = require('./data/pokemon_data.json')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * pokemonData.length)
  res.json(pokemonData[randomIndex])
})

app.get('/pokemon', (req, res) => {
  const id = parseInt(req.query.id)
  const foundPokemon = pokemonData.find((pokemon) => pokemon.id === id)
  res.json(foundPokemon)
})

app.get('/filter', (req, res) => {
  const type = req.query.type
  const filteredPokemon = pokemonData.filter((pokemon) => pokemon.types.includes(type))
  res.json(filteredPokemon)
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})