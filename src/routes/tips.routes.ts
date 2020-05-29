import { Router } from 'express';
import CreateTipService from '../services/CreateTipService';

const tipsRouter = Router();

tipsRouter.post('/', async (request, response) => {
  try {
    const { card_id, description, type } = request.body;

    const createTip = new CreateTipService();

    const tip = await createTip.execute({
      card_id,
      description,
      type,
    });

    return response.json(tip);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default tipsRouter;
