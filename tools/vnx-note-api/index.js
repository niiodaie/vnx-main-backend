
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('VNX Note API is live!');
});

export default router;
