const express = require('express');
const cors = require('cors');
const app = express();
const vnxNoteRoutes = require('./tools/vnx-note-api/routes/vnxnote');

app.use(cors());
app.use(express.json());

app.use('/api/vnx-note', vnxNoteRoutes); // API route

app.get('/', (req, res) => {
  res.send('VNX Backend API is live!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Main API listening on port ${PORT}`);
});
