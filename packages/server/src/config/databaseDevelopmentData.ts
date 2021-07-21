import 'module-alias/register';
import 'reflect-metadata';

import * as FireOrm from 'fireorm';
import * as TypeOrm from 'typeorm';
import { firestore } from 'firebase-admin';

import firebaseInitialize from '@config/firebase';
import mysqlInitialize from '@config/mysql';

import { User } from '@models/mysql/User';
import { Tutor } from '@models/mysql/Tutor';
import { Student } from '@models/mysql/Student';
import { Teacher } from '@models/mysql/Teacher';
import { Director } from '@models/mysql/Director';
import { Homework } from '@models/mysql/Homework';
import { StudentTutors } from '@models/mysql/StudentTutors';

import { Classroom } from '@models/firebase/Classroom';
import { Publications } from '@models/firebase/Publications';
import { ClassroomCalendar } from '@models/firebase/ClassroomCalendar';

import students from '@mocks/students_mocks';
import teachers from '@mocks/teacher_mocks';
import directors from '@mocks/director_mocks';
import classrooms from '@mocks/classroom_mocks';
import publications from '@mocks/publication_mocks';
import homeworks from '@mocks/homeworks_mocks';

(async () => {
  console.log(
    '\n-------------------- Database Initialize ----------------------\n'
  );

  await mysqlInitialize(true);
  console.log('* Mysql Initialize');

  await firebaseInitialize();
  console.log('* Firebase Initialize');

  const directorRepo = TypeOrm.getRepository(Director);
  const userRepo = TypeOrm.getRepository(User);
  const tutorRepo = TypeOrm.getRepository(Tutor);
  const studentRepo = TypeOrm.getRepository(Student);
  const userTutorsRepo = TypeOrm.getRepository(StudentTutors);
  const teacherRepo = TypeOrm.getRepository(Teacher);
  const homeworkRepo = TypeOrm.getRepository(Homework);

  const classRepo = FireOrm.getRepository(Classroom);
  const calendarRepo = FireOrm.getRepository(ClassroomCalendar);
  const publicationRepo = FireOrm.getRepository(Publications);

  console.log('\n Creating Data...\n');

  const studentsPromises = students.map(async (v) => {
    const user = new User();
    user.fullName = v.fullName;
    user.dni = v.dni;
    user.dayOfBirth = new Date();
    user.password = v.password;

    const student = new Student();
    student.id = v.id;
    student.user = await userRepo.save(user);

    const tutor = new Tutor();
    tutor.fullName = v.tutor.fullName;
    tutor.dni = v.tutor.dni;
    tutor.phone = v.tutor.phone;

    const studentTutors = new StudentTutors();
    studentTutors.student = await studentRepo.save(student);
    studentTutors.tutor = await tutorRepo.save(tutor);
    studentTutors.relationship = v.relation;

    await userTutorsRepo.save(studentTutors);
  });

  const teachersPromises = teachers.map(async (v) => {
    const user = new User();
    user.dni = v.dni;
    user.fullName = v.fullName;
    user.password = v.password;
    user.dayOfBirth = new Date();

    const teacher = new Teacher();
    teacher.id = v.id;
    teacher.phone = v.phone;
    teacher.nickname = v.nickname;
    teacher.email = v.email;
    teacher.user = await userRepo.save(user);

    await teacherRepo.save(teacher);
  });

  const directorsPromises = directors.map(async (v) => {
    const user = new User();
    user.fullName = v.fullName;
    user.password = v.password;
    user.dni = v.dni;

    const director = new Director();
    director.id = v.id;
    director.email = v.email;
    director.phone = v.phone;
    director.user = await userRepo.save(user);

    await directorRepo.save(director);
  });

  const homeworksPromises = homeworks.map(async (v) => {
    const homework = new Homework();
    homework.file = v.file;
    homework.createdAt = firestore.Timestamp.now();
    homework.comment = v.comment;
    homework.publicationId = v.publicationId;
    homework.student = (await studentRepo.findOne(v.studentId))!;

    await homeworkRepo.save(homework);
  });

  const classroomPromises = classrooms.map(async (v) => {
    const classroomsSaved = await classRepo.find();
    if (classroomsSaved.length) {
      classroomsSaved.forEach(async (v) => await classRepo.delete(v.id));
    }

    const classroom = new Classroom();
    classroom.id = v.id;
    classroom.name = v.name;
    classroom.grade = v.grade;
    classroom.teacherId = v.teacherId;
    classroom.createdAt = firestore.Timestamp.now();

    await classRepo.create(classroom);

    // Calendar

    const calendarsSaved = await calendarRepo.find();
    if (calendarsSaved.length) {
      calendarsSaved.forEach(async (c) => await calendarRepo.delete(c.id));
    }

    const calendar = new ClassroomCalendar();
    calendar.classroomId = v.id;
    calendar.year = v.calendar.year;
    calendar.assistance = v.calendar.assistance;
    calendar.assitanceActive = v.calendar.assistanceActive;
    calendar.nonWorkingDays = v.calendar.nonWorkingDays;

    await calendarRepo.create(calendar);
  });

  const publicationPromises = publications.map(async (v) => {
    const publicationSaved = await publicationRepo.find();
    if (publicationSaved.length) {
      publicationSaved.forEach(
        async (vv) => await publicationRepo.delete(vv.id)
      );
    }

    const publication = new Publications();
    publication.id = v.id;
    publication.limitDate = v.limitDate;
    publication.name = v.name;
    publication.type = v.type;
    publication.files = v.files;
    publication.description = v.description;
    publication.classroomId = v.classroomId;

    await publicationRepo.create(publication);
  });

  await Promise.all(studentsPromises);

  const countDocs =
    studentsPromises.length +
    teachersPromises.length +
    directorsPromises.length +
    classroomPromises.length +
    publicationPromises.length +
    homeworksPromises.length;

  console.log(
    `-------------------------- Process End -> ${countDocs} aditions -----------------------------`
  );

  process.exit();
})();
