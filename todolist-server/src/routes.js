const router = require('express').Router();
const todolistsRouter = require('./todolists/TodolistsRouter');
const tasksRouter = require('./tasks/TasksRouter');
const usersRouter = require('./users/UsersRouter');

router.get('/',(req,res) => {
  return res.json({message:'API'})
})

router.use('/todolists', todolistsRouter);
router.use('/tasks', tasksRouter);
router.use('/users', usersRouter);

module.exports = router;