const router = require('express').Router();
const TaskController = require('./TasksController');
const checkAuthorization = require('../middlewares/checkAutorization');

router.get('/:tid',[checkAuthorization],TaskController.getTasks);
router.post('/:tid',[checkAuthorization],TaskController.addTask);
router.put('/:tid/:id',[checkAuthorization],TaskController.updateTask);
router.delete('/:tid/:id',[checkAuthorization],TaskController.deleteTask);

module.exports = router;