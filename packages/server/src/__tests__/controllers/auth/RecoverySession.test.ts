// Supertest
import { server } from '../../../server';

import express from 'express';
import request from 'supertest';
import mysqlInitialize from '@config/mysql';

describe('Recovery Session Route', () => {
  const app = express();
  beforeEach(async () => {
    await mysqlInitialize();
    await server(app);
  });

  test('Get user by token Correct Format and exist Token', async () => {
    const user_token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMDAwMDEiLCJ1c2VyX3R5cGUiOiJkaXJlY3RvciIsImlhdCI6MTYyODEzMTQzNSwiZXhwIjoxNjI5NDI3NDM1fQ.tMyTjS9jkRjZZcjz7iAUmFZDe6ZePH4K5c9Zx-Jgmpc';
    const response = await request(app)
      .get('/auth/recovery-session')
      .set('Authorization', user_token)
      .expect('Content-type', /json/)
      .expect(200);
    expect(response.body.user_data).not.toBeNull();
  });
  test('Send Invalid Format Token', async () => {
    const token_invalid_format = 'asdasdasdasd';
    const response = await request(app)
      .get('/auth/recovery-session')
      .set('Authorization', token_invalid_format)
      .expect('Content-type', /json/)
      .expect(404);
    expect(response.body.message).toBe('Invalid Token Format');
  });
  test('Not Send Header "Authorization"', async () => {
    const response = await request(app)
      .get('/auth/recovery-session')
      .expect('Content-type', /json/)
      .expect(404);
    expect(response.body.message).toBe('Token undefined');
  });
  test('The sent token does not exist', async () => {
    const user_token = 'Bearer asdasdasdasd';
    const response = await request(app)
      .get('/auth/recovery-session')
      .set('Authorization', user_token)
      .expect('Content-type', /json/)
      .expect(404);
    expect(response.body.message).toBe('Token caduced');
  });
});
