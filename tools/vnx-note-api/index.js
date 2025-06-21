const express = require('express');
const router = express.Router();
const notebookRoutes = require('./routes/vnx-notebook');

router.use('/notes', notebookRoutes);

module.exports = router;
