import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import TreeController from './app/controllers/TreeController';
import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);

routes.put('/users', UserController.update);

routes.get('/trees', TreeController.index);

routes.post('/trees', TreeController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
