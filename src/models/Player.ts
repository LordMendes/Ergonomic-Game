import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('players')
class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;
}

export default Player;
