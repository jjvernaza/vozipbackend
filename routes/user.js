const express = require('express');
const userController = require('../controllers/user.controller');
const postsController = require ('../controllers/user.controller');

const router = express.Router();

router.post('/sing-up',userController.singUp);
router.post('/login',userController.login);

module.exports = router;