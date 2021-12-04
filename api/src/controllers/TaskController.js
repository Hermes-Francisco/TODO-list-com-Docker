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
  
  async delete(req, res) {
    const { id } = req.body;
    logger.info(`Deleting Task with id: ${id}`);

    try {
      await Task.findByIdAndRemove(id);
      logger.info('Task deleted!');
      res.status(200).json({ message: 'Task deleted!', timestamp: new Date().getTime() });
    } catch (e) {
      logger.error(`Error while deleting task: ${id} -> [${e.message}]`);
      res.status(500).json({ message: 'An erro ocurred while deleting Task', timestamp: new Date().getTime() });
    }
  }
}

module.exports = new TaskController();
