const mongoose = require('mongoose');
const {Task, TaskSchema} = require("../tasks/TasksSchema");

const TodolistSchema = new mongoose.Schema({
  uid: {type: String, required: true},
  title: {type: String, required: true},
  tasks: {type: [TaskSchema], required: true, default: []}
});

const TodolistModel = mongoose.model('todolists', TodolistSchema);

module.exports.Todolists = TodolistModel;
