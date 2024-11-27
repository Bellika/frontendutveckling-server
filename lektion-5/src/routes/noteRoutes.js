const express = require('express')
const router = express.Router()
const { getAllNotes, createNote } = require('../controllers/noteController')

router.get('/', getAllNotes)

router.post('/', createNote)

module.exports = router