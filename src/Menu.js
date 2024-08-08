// src/Menu.js
import React from 'react';

const Menu = ({ items, addToOrder }) => {
  return (
    <div className="menu d-flex flex-wrap">
      {items.map(item => (
        <div key={item.id} className="menu-item card m-2" style={{ width: '18rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <img src={item.image} alt={item.name} style={{ maxHeight: '150px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>SEK {item.price.toFixed(2)}</p>
            </div>
            <button onClick={() => addToOrder(item)} className="btn btn-primary mt-auto">Add to Order</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
