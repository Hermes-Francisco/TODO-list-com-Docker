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

    taskController.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
