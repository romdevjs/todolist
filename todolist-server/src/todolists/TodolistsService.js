const {Todolists} = require("./TodolistsSchema");

class TodolistsService {
  async getTodolists(uid) {
    const todos = await Todolists.find({uid});
    return todos;
  }

  async createTodolist(data) {
    const tl = new Todolists(data);
    await tl.save();
    return tl;
  }

  async updateTodolist({uid, _id, title}) {
    const todo = await Todolists.findOne({_id, uid});

    if (todo) {
      await Todolists.updateOne({uid, _id}, {title});
      return todo;
    } else {

    }

  }

  async deleteTodolist({uid,_id}) {
    const todo = await Todolists.findOne({_id, uid});

    if(todo){
      const deleted = await Todolists.deleteOne({_id,uid});
      return deleted;
    }
  }
}

module.exports.TodolistsService = new TodolistsService();