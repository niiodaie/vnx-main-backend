const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Route specifically for this tool
app.get("/tools/vnx-note-api", (req, res) => {
  res.send("VNX Note API is live!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ VNX Note API running on port ${PORT}`));
