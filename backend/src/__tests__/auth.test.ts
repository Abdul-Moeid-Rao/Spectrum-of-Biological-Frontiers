import request from 'supertest';
import app from '../src/app.js';

describe('Auth API', () => {
  it('should return 200 for health check', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('OK');
  });

  it('should return 401 for protected routes without token', async () => {
    const res = await request(app).get('/api/users/profile');
    expect(res.statusCode).toEqual(401);
  });
});
