import { Router } from 'express';

const cardsRouter = Router();

cardsRouter.post('/', async (request, response) => {
  const { type, name } = request.body;
});

export default cardsRouter;
