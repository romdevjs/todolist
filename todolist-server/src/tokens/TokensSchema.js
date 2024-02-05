const mongoose = require("mongoose");

const TokensSchema = new mongoose.Schema({
  refresh: {type: String, required: true, default: ''},
  access: {type: String, required: true, default: ''},
});

module.exports.TokensSchema = TokensSchema;