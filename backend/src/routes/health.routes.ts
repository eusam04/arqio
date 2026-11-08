import { Router } from 'express';

const router = Router();

router.get('/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Arqio API está funcionando!',
        timestamp: new Date()
    });
});

export default router;
