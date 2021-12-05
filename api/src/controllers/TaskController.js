const Task = require('../models/Task');
const logger = require('../config/logger');

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

  async show(req, res) {
    const { id } = req.params;
    const resposta = await Task.findOne({ _id: id });

    if (resposta == null) {
      logger.error(`Task with id: ${id} doesn't exist`);
      return res.status(404).json({ message: 'Task not found', timestamp: new Date().getTime() });
    }

    return res.status(200).json(resposta);
  }

  async update(req, res) {
    const { title, body } = req.body;
    const { id } = req.params;
    const response = await Task.updateOne({ _id: id }, { title, body });

    return res.status(200).json(response);
  }

  async delete(req, res) {
    const { id } = req.params;
    logger.info(`Deleting Task with id: ${id}`);

    try {
      const task = await Task.findByIdAndRemove(id);

      if (task == null) {
        logger.error(`Task with id: ${id} doesn't exist`);
        return res.status(404).json({ message: 'Task not found', timestamp: new Date().getTime() });
      }

      logger.info('Task deleted!');
      return res.status(200).json({ message: 'Task deleted!', timestamp: new Date().getTime() });
    } catch (e) {
      logger.error(`Error while deleting task: ${id} -> [${e.message}]`);
      return res.status(500).json({ message: 'An error ocurred while deleting Task', timestamp: new Date().getTime() });
    }
  }
}

module.exports = new TaskController();
