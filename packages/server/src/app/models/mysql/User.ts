import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FirebaseImage } from '@system/types';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  fullName: string;

  @Column({ type: 'char', length: 8 })
  dni: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'date' })
  dayOfBirth: Date;

  @Column('simple-json')
  profileImage: FirebaseImage;
}
