import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IDetailStudent } from '@system/types';

@Entity()
export class DetailStudent implements IDetailStudent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  relationShip: string;
}
