const {Todolists} = require('../todolists/TodolistsSchema');
const {Tasks} = require('./TasksSchema');
const mongoose = require("mongoose");

class TasksService {
  async getTasks(tid){
    const todolist = await Todolists.findById(tid);

    if(todolist){
      return todolist.tasks;
    }
  }
  async addTask({tid, title}) {
    const tl = await Todolists.findById(tid);

    if(tl){
      const task = new Tasks({tid:tl.id,title});
      await task.save();
      const newTasks = [task,...tl.tasks];
      await Todolists.updateOne({_id:tid},{tasks:newTasks});
      return task;
    }
  }

  async updateTask({tid, id, title, isActive}) {
    const tl = await Todolists.findById(tid);


    if(tl){
      let task = tl.tasks.find(task => task.id === id);

      if(task){
        task.title = title;
        task.isActive = isActive;
        await Tasks.updateOne({_id:id},{title,isActive});
        await Todolists.updateOne({_id:tid},{tasks:tl.tasks.map(t => t.id === id ? task : t)})
        return task;
      }
    }
  }

  async deleteTask({tid, id}) {
    const tl = await Todolists.findById(tid);

    if(tl){
      await Tasks.deleteOne({tid,_id:id});
      await Todolists.updateOne({_id:tid},{tasks:tl.tasks.filter(t => t.id !== id)});
      return `Delete task ${id}`;
    }
  }
}

module.exports = new TasksService();