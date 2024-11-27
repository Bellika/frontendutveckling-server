const Note = require('../models/Note')

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find()
    res.status(200).json(notes)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

const createNote = async (req, res) => {
  const { name, text } = req.body

  try {
    const newNote = new Note({ name, text })
    const note = await newNote.save()
    res.status(201).json(note)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { getAllNotes, createNote }