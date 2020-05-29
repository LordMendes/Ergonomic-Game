import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cards')
class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

export default Card;
