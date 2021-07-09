import { Column, PrimaryGeneratedColumn } from 'typeorm';

class Tutor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'char', length: 9 })
  phone: string;

  @Column({ type: 'char', length: 8, nullable: true })
  dni: string;

  @Column({ type: 'varchar', nullable: true })
  fullName: string;
}

export default Tutor;
