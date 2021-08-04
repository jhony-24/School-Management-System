// Supertest
import express from 'express';
import mysqlInitialize from '@config/mysql';
import request from 'supertest';
import bcrypt from 'bcrypt';
import { server } from '../../../server';

describe('Authentication User', () => {
  const app = express();

  beforeEach(async () => {
    await mysqlInitialize();
    await server(app);
  });

  test('Authentication User Success', async () => {
    const BODY_REQUEST = {
      DNI: '00000001',
      PASSWORD: 'admin123',
      USER_TYPE: 'director',
    };
    const response = await request(app)
      .post('/auth')
      .send(BODY_REQUEST)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200);
    expect(response.body.USER_DATA).not.toBeNull();
    expect(response.body.TOKEN_GENERATED).not.toBeNull();
  });
  test('Incorrect Dni or Password', async () => {
    const BODY_REQUEST = {
      DNI: '00000007',
      PASSWORD: 'admin123',
      USER_TYPE: 'director',
    };
    const response = await request(app)
      .post('/auth')
      .send(BODY_REQUEST)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(404);
    expect(response.body.MESSAGE).toBe('Credenciales Incorrectas');
  });
  test('The user does not belong to this type of user sent', async () => {
    const BODY_REQUEST = {
      DNI: '00000001',
      PASSWORD: 'admin123',
      USER_TYPE: 'student',
    };
    const response = await request(app)
      .post('/auth')
      .send(BODY_REQUEST)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(404);
    expect(response.body.MESSAGE).toBe('Tipo de usuario incorrecto');
  });
});
