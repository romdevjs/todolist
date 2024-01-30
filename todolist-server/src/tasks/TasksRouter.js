const router = require('express').Router();
const TaskController = require('./TasksController');

router.get('/:tid',TaskController.getTasks);
router.post('/:tid',TaskController.addTask);
router.put('/:tid/:id',TaskController.updateTask);
router.delete('/:tid/:id',TaskController.deleteTask);

module.exports = router;