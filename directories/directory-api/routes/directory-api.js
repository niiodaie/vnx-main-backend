const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Directory api API is working!");
});

module.exports = router;
