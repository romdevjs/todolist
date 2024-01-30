const {TodolistsService} = require('./TodolistsService');

class TodolistsController {
  async getTodolists(req, res) {
    const uid = '65b89312734fda2a36522bf2';
    const todos = await TodolistsService.getTodolists(uid);
    return res.json(todos);
  }

  async createTodolist(req, res) {
    const uid = '65b89312734fda2a36522bf2';
    const title = req.body.title;
    const todolist = await TodolistsService.createTodolist({uid,title});
    return res.json(todolist);
  }

  async updateTodolist(req, res) {
    const uid = '65b89312734fda2a36522bf2';
    const _id = req.params.id;
    const title = req.body.title;
    const todolist = await TodolistsService.updateTodolist({uid,_id,title});
    return res.json(todolist);
  }

  async deleteTodolist(req, res) {
    const _id = req.params.id;
    const uid = '65b89312734fda2a36522bf2';
    const todolist = await TodolistsService.deleteTodolist({uid,_id});
    return res.json(todolist);
  }
}

module.exports.TodolistsController = new TodolistsController();