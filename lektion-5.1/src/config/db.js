
const pg = require('pg')
require('dotenv').config()

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: process.env.POSTGRES_PW || '',
  port: 5432,
})

module.exports = db