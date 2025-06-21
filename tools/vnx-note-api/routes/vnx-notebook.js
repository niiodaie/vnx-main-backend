
const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const FILE_PATH = './notes.json'; // optional fallback file
let notes = [];

// Load notes from file if it exists
if (fs.existsSync(FILE_PATH)) {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    notes = JSON.parse(data) || [];
  } catch (err) {
    console.error('Failed to load notes from file:', err);
  }
}

// Save notes to file (non-blocking)
function saveNotesToFile() {
  fs.writeFile(FILE_PATH, JSON.stringify(notes, null, 2), err => {
    if (err) console.error('Failed to save notes to file:', err);
  });
}

// GET all notes
router.get('/', (req, res) => {
  res.json(notes);
});

// POST new note
router.post('/', (req, res) => {
  const newNote = { id: uuidv4(), ...req.body, date: new Date().toISOString() };
  notes.push(newNote);
  saveNotesToFile();
  res.status(201).json(newNote);
});

// PUT update existing note
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = notes.findIndex(n => n.id === id);
  if (index === -1) return res.status(404).json({ error: 'Note not found' });

  notes[index] = { ...notes[index], ...req.body };
  saveNotesToFile();
  res.json(notes[index]);
});

// DELETE note by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  notes = notes.filter(n => n.id !== id);
  saveNotesToFile();
  res.status(204).send();
});

module.exports = router;
