// src/OrderSummary.js
import React from 'react';

const OrderSummary = ({ order, updateQuantity, removeItem }) => {
  const total = order.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="order-summary">
      <h2>Your Order</h2>
      <ul className="list-group">
        {order.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {item.name} x {item.quantity}
            </div>
            <div>
              <button className="btn btn-success btn-sm mx-1" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button className="btn btn-danger btn-sm mx-1" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <button className="btn btn-secondary btn-sm mx-1" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
            <span>SEK {(item.quantity * item.price).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="total-box mt-4 text-center">
        <h3>Total: SEK {total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default OrderSummary;
