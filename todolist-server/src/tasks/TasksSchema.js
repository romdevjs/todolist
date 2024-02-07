const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
  tid: {type: String, required: true},
  title: {type: String, required: true},
  isActive: {type: Boolean, required: true, default: true},
});

const TaskModel = mongoose.model('tasks', TasksSchema);

module.exports.Tasks = TaskModel;
module.exports.TaskSchema = TasksSchema;