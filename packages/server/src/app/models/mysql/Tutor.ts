import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ITutor } from '@system/types';
import { StudentTutors } from './StudentTutors';

@Entity()
export class Tutor implements ITutor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'char', length: 9 })
  phone: string;

  @Column({ type: 'char', length: 8 })
  dni: string;

  @Column({ type: 'varchar' })
  fullName: string;

  @OneToMany(() => StudentTutors, (studentsTutors) => studentsTutors.student)
  students: StudentTutors[];
}
