import { getRepository } from 'typeorm';

import Card from '../models/Card';

interface Request {
  type: string;
  name: string;
}

class CreateCardService {
  public async execute({ type, name }: Request): Promise<Card> {}
}

export default CreateCardService;
