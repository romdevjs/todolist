const router = require('express').Router();
const UsersController = require('./UsersController');

router.post('/auth/register', UsersController.registration);
router.post('/auth/login', UsersController.login);
router.delete('/auth/logout', UsersController.logout);

module.exports = router;