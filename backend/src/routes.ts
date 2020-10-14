import { Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router();

//mvc= MOdel VIews COntrolers


routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);


export default routes;

