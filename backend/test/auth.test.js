const request = require('supertest');
const app = require('../server');

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user).toHaveProperty('username', 'testuser');
  });

  it('should login an existing user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'password',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
