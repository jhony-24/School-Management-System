import { IGetHomeworkStudent } from '@interfaces/IGetHomeworkStudent';
import { ClassroomStudent } from '@models/mysql/ClassroomStudent';
import { Homework } from '@models/mysql/Homework';
import { Student } from '@models/mysql/Student';
import { createQueryBuilder } from 'typeorm';

export default class GetHomeworkStudent implements IGetHomeworkStudent {
  async getData(userId: string) {
    const response = await createQueryBuilder()
      .select('h')
      .addSelect('s')
      .addSelect('c.classroomId')
      .from(Student, 's')
      .innerJoin(Homework, 'h', 'h.studentId = s.id')
      .innerJoin(ClassroomStudent, 'c', 'c.studentId = s.id')
      .where(`s.userId = '${userId}'`)
      .andWhere(`c.year = '${new Date().getFullYear().toString()}'`)
      .getRawMany();

    const currentHomework: Homework[] = [];

    let currentClassroomId: string =
      response.length === 0 ? '' : response[0].c_classroomId;

    response.map((v, i) => {
      const currentStudent: Student = {
        id: v.s_id,
        state: v.s_state,
        user: v.s_userId,
        homeworks: [],
      };

      const newHomework: Homework = {
        id: v.h_id,
        publicationId: v.h_publicationId,
        comment: v.h_comment,
        file: v.h_file,
        createdAt: v.h_createdAt,
        student: currentStudent,
      };

      currentHomework.push(newHomework);
    });

    return {
      classroomId: currentClassroomId,
      homework: currentHomework,
    };
  }
}
