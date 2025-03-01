import express from 'express';
const router = express.Router();

// Sample Payment Route
router.post('/create', (req, res) => {
    res.status(200).json({ message: "Payment route working!" });
});

export default router;
// import express from 'express';
// import { createPayment, verifyPayment } from '../controllers/payment.controller.js';
// import { authMiddleware } from '../middlewares/auth.middleware.js';

// const router = express.Router();

// router.post('/create', authMiddleware, createPayment);
// router.post('/verify', authMiddleware, verifyPayment);

// export default router;
