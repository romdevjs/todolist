const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
});

const TaskModel = mongoose.model('task', UserSchema);