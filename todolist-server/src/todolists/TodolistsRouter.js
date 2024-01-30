const {Router} = require('express');
const {Todolists} = require("./TodolistsSchema");
const {Task} = require("../tasks/TasksSchema");
const {TodolistsController} = require("./TodolistsController");
const router = Router();

router.get('/', TodolistsController.getTodolists);
router.post('/', TodolistsController.createTodolist);
router.put('/:id', TodolistsController.updateTodolist);
router.delete('/:id', TodolistsController.deleteTodolist);

module.exports = router;