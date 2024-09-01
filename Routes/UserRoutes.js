const express = require('express');
const router = express.Router();

const User = require('../Model/UserModel');
const UserControllers = require('../Controllers/UserControllers');

router.get('/', UserControllers.getAllUsers);
router.post('/', UserControllers.addUser);
router.get('/:id', UserControllers.getById);
router.patch('/:id', UserControllers.updateUser);
router.delete('/:id', UserControllers.deleteUser);


module.exports = router;