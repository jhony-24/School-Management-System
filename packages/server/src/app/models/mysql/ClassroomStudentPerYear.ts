import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IClassroomStudentPerYear } from '@system/types';

@Entity()
export class ClassroomStudentPerYear implements IClassroomStudentPerYear {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  year: string;

  @CreateDateColumn()
  createdAt: string;
}
