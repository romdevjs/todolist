const {Router} = require('express');
const {Todolists} = require("./TodolistsSchema");
const {Task} = require("../tasks/TasksSchema");
const {TodolistsController} = require("./TodolistsController");
const checkAuthorization = require('../middlewares/checkAutorization');
const router = Router();

router.get('/', [checkAuthorization], TodolistsController.getTodolists);
router.post('/', [checkAuthorization], TodolistsController.createTodolist);
router.put('/:id', [checkAuthorization], TodolistsController.updateTodolist);
router.delete('/:id', [checkAuthorization], TodolistsController.deleteTodolist);

module.exports = router;