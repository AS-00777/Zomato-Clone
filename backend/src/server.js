// import connectDB from './db/index.js';
// import { app } from './app.js';
// import dotenv from 'dotenv'
// dotenv.config({
//     path: './.env'
// })
// const port = `${process.env.PORT}` || 4000

// connectDB()
//     .then(() => { app.listen(port, () => console.log(`⚙️ Server is running at port: ${port}`)) })
//     .catch((err) => {
//         console.log("MongoDB connection failed with: ", err);
//     })

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './db/index.js';
import { app } from './app.js';

// Import Routes
import userRoutes from './routes/user.routes.js';
import providerRoutes from './routes/provider.routes.js';
import restaurantRoutes from './routes/restaurant.routes.js';
import foodRoutes from './routes/food.routes.js';
import cartRoutes from './routes/cart.routes.js';
import orderRoutes from './routes/order.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import reviewRoutes from './routes/review.routes.js';
import deliveryRoutes from './routes/delivery.routes.js';
import adminRoutes from './routes/admin.routes.js';

// Load environment variables
dotenv.config({ path: './.env' });

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api/user', userRoutes);
app.use('/api/provider', providerRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/admin', adminRoutes);

// Connect to database and start server
const port = process.env.PORT || 4000;
connectDB()
    .then(() => { app.listen(port, () => console.log(`⚙️ Server is running at port: ${port}`)) })
    .catch((err) => {
        console.log("MongoDB connection failed with: ", err);
    });
