import {
  Column,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import User from './User';

class Director {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @PrimaryColumn()
  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({ type: 'char', length: 9 })
  phone: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;
}

export default Director;
