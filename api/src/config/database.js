require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_STRING || 'mongodb://mongodb/todo-list');

module.exports = mongoose;
