import { Column, Entity } from 'typeorm';

@Entity()
export class DetailStudent {
  @Column({ type: 'text' })
  relationShip: string;
}
