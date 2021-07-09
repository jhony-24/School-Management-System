import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FirebaseImage } from '@system/types';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  fullName: string;

  @Column({ type: 'char', length: 8, nullable: true })
  dni: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'date', nullable: true })
  dayOfBirth: Date;

  @Column('simple-json')
  profileImage: FirebaseImage;
}

export default User;
