import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { FirebaseImage, IUser } from '@system/types';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  fullName: string;

  @Column({ type: 'char', length: 8, unique: true })
  dni: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'date' })
  dayOfBirth: Date;

  @Column({ type: 'simple-json' })
  profileImage: FirebaseImage;
}
