import { Request, Response } from 'express';
import healthService from '../services/healthService';

class HealthController {
    public async check(_req: Request, res: Response): Promise<void> {
        try {
            const result = await healthService.check();
            res.status(200).json({ status: result });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default new HealthController();
