// src/Menu.js
import React from 'react';

const Menu = ({ items, addToOrder }) => {
  return (
    <div className="menu">
      {items.map(item => (
        <div key={item.id} className="menu-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>SEK {item.price.toFixed(2)}</p>
          <button onClick={() => addToOrder(item)}>Add to Order</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
