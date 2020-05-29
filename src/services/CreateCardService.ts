import { getRepository } from 'typeorm';

import Card from '../models/Card';

interface Request {
  name: string;
}

class CreateCardService {
  public async execute({ name }: Request): Promise<Card> {
    const cardsRepository = getRepository(Card);

    const checkCardExists = cardsRepository.findOne({
      where: { name },
    });

    if (!checkCardExists) throw new Error('This card already exists');

    const card = cardsRepository.create({
      name,
    });

    await cardsRepository.save(card);

    return card;
  }
}

export default CreateCardService;
