import express from 'express';
import { signup, login, isAuth } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

router.get('/connection-test', (req, res) => {
    req.services.clientGatewayService
     .testGateway()
     .then(() => {
      res.status(200).json({isConnected: true});
     })
     .catch(() => {
      res.status(404).json({isConnected: false});
     });
   });

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

export default router;