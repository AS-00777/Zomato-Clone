import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { placeOrder, getUserOrders, updateOrderStatus } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', authMiddleware, placeOrder);
router.get('/', authMiddleware, getUserOrders);
router.put('/:orderId/status', authMiddleware, updateOrderStatus);

export default router;
