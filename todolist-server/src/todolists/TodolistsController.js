const {TodolistsService} = require('./TodolistsService');

class TodolistsController {
  async getTodolists(req, res) {
    try{
      const uid = req.uid;
      const todos = await TodolistsService.getTodolists(uid);
      return res.json(todos);
    }catch (e) {
      return res.status(401).json({error:e});
    }
  }

  async createTodolist(req, res) {
    try{
      const uid = req.uid;
      const title = req.body.title;
      const todolist = await TodolistsService.createTodolist({uid,title});
      return res.json(todolist);
    }catch (e) {
      return res.status(401).json({error:e});
    }
  }

  async updateTodolist(req, res) {
    try{
      const uid = req.uid;
      const _id = req.params.id;
      const title = req.body.title;
      const todolist = await TodolistsService.updateTodolist({uid,_id,title});
      return res.json(todolist);
    }catch (e) {
      return res.status(401).json({error:e});
    }
  }

  async deleteTodolist(req, res) {
    try{
      const _id = req.params.id;
      const uid = req.uid;
      const todolist = await TodolistsService.deleteTodolist({uid,_id});
      return res.json(todolist);
    }catch (e) {
      return res.status(401).json({error:e});
    }
  }
}

module.exports.TodolistsController = new TodolistsController();