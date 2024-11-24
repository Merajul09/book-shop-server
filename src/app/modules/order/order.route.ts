import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/', OrderController.orderBook);
router.get('/revenue', OrderController.getAllRevenue);

export const OrderRoutes = router;
