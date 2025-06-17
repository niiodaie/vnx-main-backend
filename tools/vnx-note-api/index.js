const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mount API namespace
const vnxNoteRoutes = require('./routes/vnxnote');
app.use('/tools/vnx-note-api', vnxNoteRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
