import { Router } from 'express';
import CreateTipService from '../services/CreateTipService';

const tipsRouter = Router();

tipsRouter.post('/', async (request, response) => {
  const { card_id, description, type } = request.body;

  const createTip = new CreateTipService();

  const tip = await createTip.execute({
    card_id,
    description,
    type,
  });

  return response.json(tip);
});

export default tipsRouter;
