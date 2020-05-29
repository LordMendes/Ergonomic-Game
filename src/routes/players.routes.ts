import { Router } from 'express';

import CreatePlayerService from '../services/CreatePlayerService';

const playersRouter = Router();

playersRouter.post('/', async (request, response) => {
  try {
    const { username, password } = request.body;

    const createPlayer = new CreatePlayerService();

    const player = await createPlayer.execute({
      username,
      password,
    });

    return response.json(player);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default playersRouter;
