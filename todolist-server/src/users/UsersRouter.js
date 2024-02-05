const router = require('express').Router();
const UsersController = require('./UsersController');
const checkAuthorization = require('../middlewares/checkAutorization');

router.post('/auth/register', UsersController.registration);
router.post('/auth/login', UsersController.login);
router.delete('/auth/logout', [checkAuthorization],UsersController.logout);

module.exports = router;