import { EntityRepository, Repository } from 'typeorm';

import Tip from '../models/Tip';

@EntityRepository(Tip)
class TipsRepository extends Repository<Tip> {
  public async checkTypeBad(card_id: string): Promise<boolean> {
    const findBad = await this.findOne({
      where: {
        card_id,
      },
    });
    if (findBad) return false;

    return true;
  }

  public async checkTypeGood(card_id: string): Promise<boolean> {
    const findGood = await this.findOne({
      where: {
        card_id,
      },
    });
    if (findGood) return false;

    return true;
  }
}

export default TipsRepository;
