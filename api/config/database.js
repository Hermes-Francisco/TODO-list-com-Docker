const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb/todo-list');

module.exports = mongoose;
