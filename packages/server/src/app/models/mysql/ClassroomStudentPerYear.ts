import { Column, CreateDateColumn, Entity } from 'typeorm';

@Entity()
export class ClassroomStudentPerYear {
  @Column()
  year: string;

  @CreateDateColumn()
  createdAt: string;
}
