const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Experience api API is working!");
});

module.exports = router;
