const mongoose = require('mongoose');
const {TokensSchema} = require('../tokens/TokensSchema')

const UserSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  tokens: TokensSchema
});

const UserModel = mongoose.model('users', UserSchema);

module.exports.Users = UserModel;