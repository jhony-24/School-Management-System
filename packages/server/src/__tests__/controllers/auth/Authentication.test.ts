// Supertest
import express from 'express';
import mysqlInitialize from '@config/mysql';
import request from 'supertest';
import { server } from '../../../server';

describe('Authentication User', () => {
  const app = express();

  beforeEach(async () => {
    await mysqlInitialize();
    await server(app);
  });

  test('Authentication User Success', async () => {
    const body_request = {
      dni: '00000001',
      password: 'admin123',
      user_type: 'director',
    };
    const response = await request(app)
      .post('/auth')
      .send(body_request)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200);
    expect(response.body.user_data).not.toBeNull();
    expect(response.body.token_generated).not.toBeNull();
  });
  test('Incorrect Dni or Password', async () => {
    const body_request = {
      dni: '00000007',
      password: 'admin123',
      user_type: 'director',
    };
    const response = await request(app)
      .post('/auth')
      .send(body_request)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(404);
    expect(response.body.message).toBe('Credenciales Incorrectas');
  });
  test('The user does not belong to this type of user sent', async () => {
    const body_request = {
      dni: '00000001',
      password: 'admin123',
      user_type: 'student',
    };
    const response = await request(app)
      .post('/auth')
      .send(body_request)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(404);
    expect(response.body.message).toBe('Tipo de usuario incorrecto');
  });
});
