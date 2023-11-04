import { Router } from 'express';
import HealthController from '../controllers/healthController';

const router: Router = Router();

router.get('/api/v1/health', HealthController.check);

export default router;
