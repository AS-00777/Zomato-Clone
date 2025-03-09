import express from "express";
import Cart from "../models/cartModel.js";


import Order from "../models/orderModel.js";



const router = express.Router();

// Checkout route
router.post("/checkout", async (req, res) => {
  const { userId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const order = new Order({
      userId,
      items: cart.items,
      status: "pending",
    });

    await order.save();
    cart.items = []; // Clear the cart after checkout
    await cart.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add item to cart (or increase quantity if already exists)
router.post("/add", async (req, res) => {
  const { userId, foodId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ foodId, quantity: 1 }] });
    } else {
      const item = cart.items.find((item) => item.foodId.toString() === foodId);
      if (item) {
        item.quantity += 1; // Increase quantity
      } else {
        cart.items.push({ foodId, quantity: 1 });
      }
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Decrease quantity or remove item if quantity is 1
router.post("/decrease", async (req, res) => {
  const { userId, foodId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const itemIndex = cart.items.findIndex((item) => item.foodId.toString() === foodId);
    if (itemIndex !== -1) {
      if (cart.items[itemIndex].quantity > 1) {
        cart.items[itemIndex].quantity -= 1;
      } else {
        cart.items.splice(itemIndex, 1);
      }
      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get user cart
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate("items.foodId");
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router; // ✅ Exporting as ES Module
