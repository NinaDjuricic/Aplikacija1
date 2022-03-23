import express from 'express';
import { signup, login, isAuth } from '../controllers/auth.js';

const router = express.Router();

router.get('/login', login);

router.get('/signup', signup);

router.get('/private', isAuth);



router.get('/', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

export default router;
