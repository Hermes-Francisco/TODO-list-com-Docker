const mongoose = require('../config/database');

const TaskSchema = new mongoose.Schema({
  title: String,
  body: String,
});

module.exports = mongoose.model('Task', TaskSchema);
