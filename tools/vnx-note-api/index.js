import express from 'express';
import notebookRoutes from './routes/vnx-notebook.js';

const router = express.Router();
router.use('/notes', notebookRoutes);

// ✅ Change this line:
export default router; // instead of module.exports
