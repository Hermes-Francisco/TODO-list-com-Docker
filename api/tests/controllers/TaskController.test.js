const taskController = require('../../src/controllers/TaskController');
const { responseMock, requestMock } = require('./express.mock');

jest.mock('../../src/models/Task');
const Task = require('../../src/models/Task');

describe('Test TaskController', () => {
  it('[Delete] Should success delete task', async () => {
    Task.findByIdAndRemove.mockImplementation(() => Promise.resolve({
      title: 'Minha task',
      body: 'Minha task de teste',
    }));

    const req = requestMock();
    const res = responseMock();
    req.params.id = 'id_123';

    await taskController.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it('[Delete] Should return status 404 when task not found', async () => {
    Task.findByIdAndRemove.mockImplementation(() => null);

    const req = requestMock();
    const res = responseMock();
    req.params.id = 'id_123';

    await taskController.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it('[Delete] Should return error when throws exception', async () => {
    Task.findByIdAndRemove.mockImplementation(() => {
      throw new Error('Error during test');
    });

    const req = requestMock();
    const res = responseMock();
    req.params.id = 'id_123';

    await taskController.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it('[Show] Should successfully get a Task', async () => {
    Task.findOne.mockImplementation(() => Promise.resolve({
      title: 'Tarefa 1',
      body: 'Teste de Tarefa 1',
    }));

    const req = requestMock();
    const res = responseMock();
    req.params.id = '123';

    await taskController.show(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it('[Show] Should return 404 if a task was not found', async () => {
    Task.findOne.mockImplementation(() => Promise.resolve(null));

    const req = requestMock();
    const res = responseMock();
    req.params.id = '123';

    await taskController.show(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it('[Show] Should return 500 if an Exception occurs', async () => {
    Task.findOne.mockImplementation(() => {
      throw new Error('error');
    });

    const req = requestMock();
    const res = responseMock();
    req.params.id = '123';

    await taskController.show(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
