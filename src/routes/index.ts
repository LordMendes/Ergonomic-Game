import { Router } from 'express';

import playersRouter from './players.routes';
import cardsRouter from './cards.routes';

const routes = Router();

routes.use('/players', playersRouter);
routes.use('./cards', cardsRouter);

export default routes;
