const {Todolists} = require("./TodolistsSchema");

class TodolistsService {
  async getTodolists(uid) {
    try {
      const todos = await Todolists.find({uid});
      return todos;
    } catch (e) {
      throw e;
    }
  }

  async createTodolist(data) {
    try {
      const tl = new Todolists(data);
      await tl.save();
      return tl;
    } catch (e) {
      throw e;
    }
  }

  async updateTodolist({uid, _id, title}) {
    try {
      await Todolists.findOneAndUpdate({uid, _id}, {title});
      return await Todolists.findOne({uid, _id});
    } catch (e) {
      throw e;
    }
  }

  async deleteTodolist({uid, _id}) {
    try {
      await Todolists.findOneAndDelete({_id, uid});
      return {message: 'Todolist has been deleted successfully!'};
    } catch (e) {
      throw e;
    }
  }
}

module.exports.TodolistsService = new TodolistsService();