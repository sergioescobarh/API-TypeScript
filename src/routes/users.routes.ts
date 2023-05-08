//imports:
import express  from  'express';    
const router = express.Router();
import userController from '../controllers/users.controller';



router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.get('/list',userController.getUsers);

//register (create user)
router.post('/register', userController.createUser);

export default router;