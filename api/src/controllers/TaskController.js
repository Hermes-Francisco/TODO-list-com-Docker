const Task = require('../models/Task');

class TaskController {
  async create(req, res) {
    const { title, body } = req.body;

    const resposta = await Task.create({ title, body });
    return res.status(201).json(resposta);
  }

  async index(req, res) {
    const resposta = await Task.find();

    return res.status(200).json(resposta);
  }
}

module.exports = new TaskController();
