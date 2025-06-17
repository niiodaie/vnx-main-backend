// tools/vnx-note-api/routes/vnxnote.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('vnx-note API is live!');
});

router.post('/save', (req, res) => {
  const data = req.body;
  // process/save logic goes here
  res.json({ success: true, message: 'Note saved', data });
});

module.exports = router;
