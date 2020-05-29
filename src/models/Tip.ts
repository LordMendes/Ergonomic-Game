/* eslint-disable camelcase */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tips')
class Tip {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  card_id: string;

  @Column()
  description: string;

  @Column()
  type: 'good' | 'bad' | 'regular';
}

export default Tip;
