import express from 'express';
import request from 'supertest';

import firebaseConnection from '@config/firebase';
import { MarkStudentAttendance } from '@controllers/assistance/MarkStudentAttendance';

import { server } from '../../../server';
import { AdapterController } from '@utils/AdapterController';
import {
  classroomIdMock,
  createdDateAssistanceMock,
  studentIdMock,
} from '@mocks/markStudentAttendance.mock';

describe('MarkStudentAttendance controller', () => {
  const app = express();

  beforeEach(async () => {
    await firebaseConnection();
    await server(app);
  });

  test('should emit a error if the user does not send body', (done) => {
    app.post('/assistance/mark', AdapterController(MarkStudentAttendance));
    request(app)
      .post('/assistance/mark')
      .expect('Content-Type', /json/)
      .expect(404, { message: 'Faltan enviar datos' })
      .end(done);
  });

  test('should not exists the classroomId', (done) => {
    const body = {
      classroomId: 'abc124124abc',
      studentId: studentIdMock,
      date: createdDateAssistanceMock,
    };
    app.post('/assistance/mark', AdapterController(MarkStudentAttendance));
    request(app)
      .post('/assistance/mark')
      .send(body)
      .expect('Content-Type', /json/)
      .expect(404, { message: 'Clase no encontrada' })
      .end(done);
  });

  test('should add', (done) => {
    const body = {
      classroomId: classroomIdMock,
      studentId: studentIdMock,
      date: createdDateAssistanceMock,
    };

    request(app)
      .post('/assistance/mark')
      .send(body)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((response) => {
        const expectedBody = response.body;
        expect(expectedBody).toHaveProperty('students');
      })
      .end(done);
  });
});
