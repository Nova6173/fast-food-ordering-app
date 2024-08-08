// src/App.js
import React, { useState } from 'react';
import Menu from './Menu';
import OrderSummary from './OrderSummary';
import Header from './Header';
import './App.css';

const App = () => {
  const [items] = useState([
    { id: 1, name: 'Burger', description: 'A delicious burger with all the fixings.', price: 7.99, image: '/images/burger-8933592_1280.jpg' },
    { id: 2, name: 'Pizza', description: 'Classic pizza with your favorite toppings.', price: 9.99, image: '/images/pizza-8944546_1280.jpg' },
    { id: 3, name: 'Fries', description: 'Crispy golden fries served hot and fresh.', price: 5.99, image: '/images/french-fries-4977353_1280.jpg' },
    { id: 4, name: 'Wings', description: 'Crispy wings served with your choice of protein.', price: 6.99, image: '/images/chicken-wings-4000442_1280.jpg' },
    { id: 5, name: 'Salad', description: 'Fresh salad with your choice of protein.', price: 4.99, image: '/images/pasta-7209002_1280.jpg' },
    { id: 6, name: 'Milkshake Vanilla', description: 'Vanilla milkshake with your choice of sprinkles.', price: 3.99, image: '/images/milkshake-6578503_1280.jpg' },
    { id: 7, name: 'Milkshake Chocolate', description: 'Chocolate milkshake with your choice of sprinkles.', price: 3.99, image: '/images/chocolate-smoothie-1058191_1280.jpg' },
    { id: 8, name: 'All you can eat menu', description: 'All you can eat menu', price: 20.00, image: '/images/emoji-8935542_1280.png' },
  ]);

  const [order, setOrder] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const addToOrder = (item) => {
    setOrder(prevOrder => {
      const existingItem = prevOrder.find(orderItem => orderItem.id === item.id);
      if (existingItem) {
        return prevOrder.map(orderItem =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      }
      return [...prevOrder, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      setOrder(prevOrder =>
        prevOrder.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setOrder(prevOrder => prevOrder.filter(item => item.id !== id));
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Header />
      <button onClick={toggleTheme}>{darkMode ? 'Light' : 'Dark'} Mode</button>
      <Menu items={items} addToOrder={addToOrder} />
      <OrderSummary order={order} updateQuantity={updateQuantity} removeItem={removeItem} />
    </div>
  );
  
};

export default App;
