import React from "react";

const OrderSummary = ({ order, updateQuantity, removeItem }) => {

    const toContainHTML = order.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className="order-summary">
            <h2>Your Order</h2>
            <ul>
                {order.map(item => (
                    <li key={item.id}>
                        {item.name} x {item.quantity}
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                        <span>SEK {(item.quantity *item.price).toFixed(2)}</span>
                    </li>))}
            </ul>
            <h3>Total: SEK {toContainHTML.toFixed(2)} </h3>
        </div>
    );

};
export default OrderSummary;