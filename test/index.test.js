const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  test('Deve retornar um JSON com a mensagem "Hello World"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello World' });
  });
});
