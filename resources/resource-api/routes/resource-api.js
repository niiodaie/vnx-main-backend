const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Resource api API is working!");
});

module.exports = router;
