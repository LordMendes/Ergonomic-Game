import { Router } from 'express';

import playersRouter from './players.routes';
import cardsRouter from './cards.routes';
import tipsRouter from './tips.routes';

const routes = Router();

routes.use('/players', playersRouter);
routes.use('/cards', cardsRouter);
routes.use('/tips', tipsRouter);

export default routes;
