import express from 'express';
import Order from '../models/orderModel.js'; // Import the order model

const router = express.Router();

// Route to place an order
router.post('/place', async (req, res) => {
    try {
        const { user, items, totalPrice } = req.body;

        const newOrder = new Order({
            user,
            items,
            totalPrice
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error placing order', error: error.message });
    }
});

// Route to get all orders of a specific user
router.get('/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId }).sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
});

export default router; // Use export default for ES module
