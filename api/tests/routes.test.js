const request = require('supertest');
const app = require('../src/app');

jest.mock('../src/models/Task');
const Task = require('../src/models/Task');

describe('Test Routes', () => {
  it('[DELETE] Should success delete Task', async () => {
    Task.findByIdAndRemove.mockImplementation(() => Promise.resolve({
      title: 'Minha task',
      body: 'Minha task de teste',
    }));

    const res = await request(app)
      .delete('/task/id_123')
      .expect(200);

    expect(res.body.message).toEqual('Task deleted!');
  });
});
