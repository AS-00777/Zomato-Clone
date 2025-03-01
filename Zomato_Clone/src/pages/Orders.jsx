import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for API calls


const Orders = () => {
  const [orders, setOrders] = useState([]); // State to hold orders

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders'); // Adjust the API endpoint as needed
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.length > 0 ? (
        <ul>
          {orders.map(order => (
            <li key={order._id}>
              Order ID: {order._id} - Status: {order.status}
              <ul>
                {order.items.map(item => (
                  <li key={item.foodId}>{item.quantity} x Food Item ID: {item.foodId}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}


export default Orders
