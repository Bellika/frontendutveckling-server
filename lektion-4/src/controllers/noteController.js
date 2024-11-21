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

const getNote = async (req, res) => {
  const { note_id } = req.params
  try {
    const note = await Note.findById(note_id)
    if (!note) {
      return res.status(404).json({ message: 'Note not found'})
    }
    res.status(200).json(note)
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

const updateNote = async (req, res) => {
  const { note_id } = req.params
  const { name, text } = req.body

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      note_id, 
      { name, text },
      { new: true }
  )
    if (!updateNote) {
      return res.status(404).json({ message: 'Note not found' })
    }
    res.status(200).json(updatedNote)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

const deleteNote = async (req, res) => {
  const { note_id } = req.params

  try {
    const deletedNote = await Note.findByIdAndDelete(note_id)
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found'})
    }
    res.status(200).json(deletedNote)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { createNote, getAllNotes, getNote, updateNote, deleteNote }