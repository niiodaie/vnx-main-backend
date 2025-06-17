
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('VNX Main Backend Root - Use /tools/vnx-note-api for specific services.');
});

import vnxNoteApi from './tools/vnx-note-api/index.js';
app.use('/tools/vnx-note-api', vnxNoteApi);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`VNX Backend running on port ${PORT}`));
