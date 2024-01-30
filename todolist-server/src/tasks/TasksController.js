const TaskService = require('./TasksService');

class TasksController {
  async getTasks(req, res) {
    const tid = req.params.tid;
    const tasks = await TaskService.getTasks(tid)
    return res.json(tasks);
  }

  async addTask(req, res) {
    const tid = req.params.tid;
    const title = req.body.title;
    const task = await TaskService.addTask({tid, title})
    return res.json(task);
  }

  async updateTask(req, res) {
    const {tid, id} = req.params;
    const {title, isActive} = req.body;
    const task = await TaskService.updateTask({tid, id, title, isActive})
    return res.json(task);
  }

  async deleteTask(req, res) {
    const {tid, id} = req.params;
    const task = await TaskService.deleteTask({tid, id})
    return res.json(task);
  }
}

module.exports = new TasksController();