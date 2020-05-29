import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Player from '../models/Player';

interface Request {
  username: string;
  password: string;
}

class CreatePlayerService {
  public async execute({ username, password }: Request): Promise<Player> {
    const playersRepository = getRepository(Player);
    const checkPlayerExists = await playersRepository.findOne({
      where: { username },
    });

    if (checkPlayerExists) {
      throw new Error('Username already exists!');
    }

    const hashedPassword = await hash(password, 8);

    const player = playersRepository.create({
      username,
      password: hashedPassword,
    });

    await playersRepository.save(player);

    return player;
  }
}

export default CreatePlayerService;
