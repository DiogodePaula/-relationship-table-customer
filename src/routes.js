import { Router } from 'express';

import cors from 'cors';

import BrandController from './app/controllers/BrandController';
import ProductController from './app/controllers/ProductController';
import SaleController from './app/controllers/SaleController';
import ClientController from './app/controllers/ClientController';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json({ result: 'BOMBANDO' }));

routes.post('/brands', BrandController.store);
routes.get('/brands', BrandController.index);
routes.get('/brands/:uid', BrandController.show);
routes.put('/brands/:uid', BrandController.update);
routes.delete('/brands/:uid', BrandController.delete);

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/products/:uid', ProductController.show);
routes.put('/products/:uid', ProductController.update);
routes.delete('/products/:uid', ProductController.delete);

routes.post('/sales', SaleController.store);
routes.get('/sales', SaleController.index);
routes.get('/sales/:uid', SaleController.show);
routes.put('/sales/:uid', SaleController.update);
routes.delete('/sales/:uid', SaleController.delete);

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.index);
routes.get('/clients/:uid', ClientController.show);
routes.put('/clients/:uid', ClientController.update);
routes.delete('/clients/:uid', ClientController.delete);

export default routes;
