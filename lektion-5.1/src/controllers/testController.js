const db = require('../config/db')

const getAllTests = async (req, res) => {
  try {
    const result = await db.query('SELECT * from test')
    res.status(200).json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'failed to fetch'})
  }
}

const createTest = async (req, res) => {
  const { title, text } = req.body
  console.log(title,text)
  if (!title || !text) {
    return res.status(400).json({ error: 'title and text are required' })
  }

  try {
    const result = await db.query(
      'INSERT INTO test (title, text) VALUES ($1, $2) RETURNING *',
      [title, text] 
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error('Error inserting into test table:', err)
    res.status(500).json({ error: 'Failed to insert into test table' })
  }
}

module.exports = { getAllTests, createTest }