const Task = require("../models/Task");

class TaskController {
    async create(req, res) {
        const { title, body } = req.body;

        let resposta = await Task.create({title, body});

        return res.status(201).json(resposta);
    }
}

module.exports = new TaskController();
