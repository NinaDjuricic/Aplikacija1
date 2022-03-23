import express from 'express';
import { signup, login, isAuth } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

router.get('/public', async (req, res, next) => {
    try {
        res.status(200).json({ message: "here is your public resource" });
    } catch (err) {
      res.json({ error: err.message || err.toString() });
    }
  });

/*
router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});
*/
export default router;