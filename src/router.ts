import { Router } from 'express';
import { IndexController } from './controllers/IndexController';
import expressPlayground from 'graphql-playground-middleware-express';

const router = Router();

router.get('/', IndexController);
router.get('/playground', expressPlayground({ endpoint: '/graphql' }));

export default router;
