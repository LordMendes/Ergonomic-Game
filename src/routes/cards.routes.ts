import { Router } from 'express';
import CreateCardService from '../services/CreateCardService';

const cardsRouter = Router();

cardsRouter.post('/', async (request, response) => {
  try {
    const { name } = request.body;

    const createCard = new CreateCardService();

    const card = await createCard.execute({
      name,
    });

    return response.json(card);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default cardsRouter;
