const TaskService = require('./TasksService');

class TasksController {
  async getTasks(req, res) {
    try {
      const tid = req.params.tid;
      const tasks = await TaskService.getTasks(tid)
      return res.json(tasks);
    } catch (e) {
      return res.status(401).json({error: e});
    }
  }

  async addTask(req, res) {
    try {
      const tid = req.params.tid;
      const title = req.body.title;
      const task = await TaskService.addTask({tid, title})
      return res.json(task);
    } catch (e) {
      return res.status(401).json({error: e});
    }
  }

  async updateTask(req, res) {
    try {
      const {tid, id} = req.params;
      const {title, isActive} = req.body;
      const task = await TaskService.updateTask({tid, id, title, isActive})
      return res.json(task);
    } catch (e) {
      return res.status(401).json({error: e});
    }
  }

  async deleteTask(req, res) {
    try {
      const {tid, id} = req.params;
      const task = await TaskService.deleteTask({tid, id})
      return res.json(task);
    } catch (e) {
      return res.status(401).json({error: e});
    }
  }
}

module.exports = new TasksController();