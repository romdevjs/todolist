const {Todolists} = require('../todolists/TodolistsSchema');
const {Tasks} = require('./TasksSchema');
const mongoose = require("mongoose");

class TasksService {
  async getTasks(tid) {
    try {
      const todolist = await Todolists.findById(tid);

      if (todolist) {
        return todolist.tasks;
      }
    } catch (e) {
      throw e;
    }
  }

  async addTask({tid, title}) {
    try {
      const tl = await Todolists.findById(tid);

      if (tl) {
        const task = new Tasks({tid: tl.id, title});
        await task.save();
        const newTasks = [task, ...tl.tasks];
        await Todolists.updateOne({_id: tid}, {tasks: newTasks});
        return task;
      }
    } catch (e) {
      throw e;
    }
  }

  async updateTask({tid, id, title, isActive}) {
    try {
      const tl = await Todolists.findById(tid);

      if (tl) {
        let task = tl.tasks.find(task => task.id === id);

        if (task) {
          task.title = title;
          task.isActive = isActive;
          await Tasks.updateOne({_id: id}, {title, isActive});
          await Todolists.updateOne({_id: tid}, {tasks: tl.tasks.map(t => t.id === id ? task : t)})
          return task;
        }
      }
    } catch (e) {
      throw e;
    }
  }

  async deleteTask({tid, id}) {
    try {
      const tl = await Todolists.findById(tid);

      if (tl) {
        await Tasks.deleteOne({tid, _id: id});
        await Todolists.updateOne({_id: tid}, {tasks: tl.tasks.filter(t => t.id !== id)});
        return `Delete task ${id}`;
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new TasksService();