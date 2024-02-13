const router = require('express').Router();
const UsersController = require('./UsersController');
const checkAuthorization = require('../middlewares/checkAutorization');
const checkRefreshToken = require('../middlewares/checkRefreshToken');

router.post('/auth/register', UsersController.registration);
router.post('/auth/login', UsersController.login);
router.post('/auth/refresh', [checkRefreshToken], UsersController.refresh);
router.delete('/auth/logout', [checkAuthorization], UsersController.logout);

module.exports = router;