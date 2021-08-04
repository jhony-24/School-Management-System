// Supertest
import express from 'express';
import request from 'supertest';
import mysqlInitialize from '@config/mysql';
import { server } from '../../../server';

describe('Renew Session Route', () => {
  const app = express();
  beforeEach(async () => {
    await mysqlInitialize();
    await server(app);
  });

  /**
   * Regresar Usuario por peticion de token
   */
  test('Get user by token Correct Format and exist Token', async () => {
    const USER_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMDAwMSIsInVzZXJUeXBlIjoiZGlyZWN0b3IiLCJpYXQiOjE2MjgxMTc1NDUsImV4cCI6MTYyOTQxMzU0NX0.vzCz3PUTS3zvjWsFUNXaGZAWFFiiRTm2b2NLVzY1Mog';
    const response = await request(app)
      .get('/auth/renewSession')
      .set('Authorization', USER_TOKEN)
      .expect('Content-type', /json/)
      .expect(200);
    expect(response.body.userData).not.toBeNull();
  });
  test('Send Invalid Format Token', async () => {
    const TOKEN_INVALID_FORMAT = 'asdasdasdasd';
    const response = await request(app)
      .get('/auth/renewSession')
      .set('Authorization', TOKEN_INVALID_FORMAT)
      .expect('Content-type', /json/)
      .expect(404);
    expect(response.body.MESSAGE).toBe('Invalid Token Format');
  });
  test('Not Send Header "Authorization"', async () => {
    const response = await request(app)
      .get('/auth/renewSession')
      .expect('Content-type', /json/)
      .expect(404);
    expect(response.body.MESSAGE).toBe('Token undefined');
  });
  test('The sent token does not exist', async () => {
    const USER_TOKEN = 'Bearer asdasdasdasd';
    const response = await request(app)
      .get('/auth/renewSession')
      .set('Authorization', USER_TOKEN)
      .expect('Content-type', /json/)
      .expect(404);
    expect(response.body.MESSAGE).toBe('Token caduced');
  });
});
