const mongoose = require("mongoose");
const schema = mongoose.Schema;
const todoSchema = new schema({
  text: String,
  isDone: Boolean,
});

var todos = mongoose.model("Todos", todoSchema);
module.exports = todos;
