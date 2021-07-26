import { server } from '../../server';
import express from 'express';
import request from 'supertest';
import mysqlInitialize from '@config/mysql';
import firebaseInitialize from '@config/firebase';

const app = express();

describe('Validando el endpoint', () => {
  const app = express();

  beforeEach(async () => {
    await server(app);
    await mysqlInitialize();
    await firebaseInitialize();
  });

  test('Sending the correct id', (done) => {
    request(app)
      .get('/publicationStudent')
      .send({ userId: 'user_0001' })
      .expect('Content-Type', /application\/json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        return done();
      });
  });

  test('Sending an incorret userId', async () => {
    const response = await request(app)
      .get('/publicationStudent')
      .send({ userId: null })
      .set('Accept', 'application/json')
      .expect(200);

    expect(response.body.message).not.toBeUndefined();
  });
});
