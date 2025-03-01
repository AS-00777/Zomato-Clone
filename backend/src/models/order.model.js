import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true },
            quantity: Number
        }
    ],
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    totalPrice: Number,
    status: { type: String, enum: ['Pending', 'Preparing', 'Out for Delivery', 'Delivered'], default: 'Pending' },
    paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
    deliveryPartnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryPartner' } // NEW FIELD
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);

// const orderSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     items: [
//         {
//             foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true },
//             quantity: Number
//         }
//     ],
//     restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
//     totalPrice: Number,
//     status: { type: String, enum: ['Pending', 'Preparing', 'Out for Delivery', 'Delivered'], default: 'Pending' },
//     paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
// }, { timestamps: true });

// export const Order = mongoose.model('Order', orderSchema);
