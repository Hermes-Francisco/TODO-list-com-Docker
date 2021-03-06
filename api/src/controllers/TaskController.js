const Task = require('../models/Task');
const logger = require('../config/logger');

class TaskController {
  async create(req, res) {
    const { title, body } = req.body;

    try {
      const resposta = await Task.create({ title, body });
      return res.status(201).json(resposta);
    } catch (error) {
      logger.error(`Error while creating task -> [${error.message}]`);
      return res.status(500).json({ message: 'An error ocurred while creating the task', timestamp: new Date().getTime() });
    }
  }

  async index(req, res) {
    try {
      const resposta = await Task.find();
      return res.status(200).json(resposta);
    } catch (error) {
      logger.error(`Error while fetching task list -> [${error.message}]`);
      return res.status(500).json({ message: 'An error ocurred while fetching the task list', timestamp: new Date().getTime() });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const resposta = await Task.findOne({ _id: id });

      if (resposta == null) {
        logger.error(`Task with id: ${id} doesn't exist`);
        return res.status(404).json({ message: 'Task not found', timestamp: new Date().getTime() });
      }

      return res.status(200).json(resposta);
    } catch (error) {
      logger.error(`Error while fetching task: ${id} -> [${error.message}]`);
      return res.status(500).json({ message: 'An error ocurred while fetching Task', timestamp: new Date().getTime() });
    }
  }

  async update(req, res) {
    const { title, body } = req.body;
    const { id } = req.params;
    try {
      const response = await Task.updateOne({ _id: id }, { title, body });
      if (response.matchedCount === 0) {
        logger.error(`Task with id: ${id} doesn't exist`);
        return res.status(404).json({ message: 'Task not found', timestamp: new Date().getTime() });
      }

      return res.status(200).json(response);
    } catch (error) {
      logger.error(`Error while updating task: ${id} -> [${error.message}]`);
      return res.status(500).json({ message: 'An error ocurred while updating Task', timestamp: new Date().getTime() });
    }
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
