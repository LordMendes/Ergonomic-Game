import { getCustomRepository } from 'typeorm';
import TipsRepository from '../repositories/TipsRepository';

import Tip from '../models/Tip';

interface Request {
  description: string;
  card_id: string;
  type: 'bad' | 'good' | 'regular';
}

class CreateTipService {
  public async execute({ description, card_id, type }: Request): Promise<Tip> {
    const tipsRepository = getCustomRepository(TipsRepository);

    if (type === 'good') {
      const checkGood = await tipsRepository.checkTypeGood(card_id);
      if (!checkGood) throw new Error('This card already have an GOOD tip.');
    }
    if (type === 'bad') {
      const checkBad = await tipsRepository.checkTypeBad(card_id);
      if (!checkBad) throw new Error('This card already have an BAD tip.');
    }

    const tip = tipsRepository.create({
      description,
      card_id,
      type,
    });

    await tipsRepository.save(tip);

    return tip;
  }
}

export default CreateTipService;
