const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.send('Workingg')
})

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.get('/user/:userId', userController.allowIfLogedin, userController.getUser);

router.get('/users', userController.allowIfLogedin, userController.allowGetAllUsers, userController.getUsers);

router.delete('/user/:userId', userController.allowIfLogedin, userController.allowDeleteAnyUser, userController.deleteUser);


module.exports = router;