'use client'
import React, { useContext, useEffect } from 'react';
import { CartContext } from '@/context/CartContext';
import db from '@/db/db';

const CartPage = () => {
  const cart = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.cartItems.reduce(
      (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
      0
    );
  };

  const handleIncrement = (itemId) => {
    cart.setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    cart.setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
    );
  };

  const handleRemove = (itemId) => {
    cart.setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  useEffect(() => {
    cart.setCartItems((prevCartItems) =>
      prevCartItems.map((item) => ({
        ...item,
        id: db.products.find((product) => product.name === item.name)?.id || 0,
        quantity: item.quantity || 1,
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-background to-secondary">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4 text-text">Your Cart</h2>
        {cart.cartItems.length === 0 ? (
          <p className="text-center text-accent text-lg">
            Cart is empty. Add some items to the cart.
          </p>
        ) : (
          <div className="bg-accent bg-opacity-20 p-4 rounded-lg shadow-lg">
            {cart.cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-lg overflow-hidden">
                  <img
                    src={
                      item.imgsrc ||
                      db.products.find((p) => p.name === item.name)?.imgsrc ||
                      'https://via.placeholder.com/150'
                    }
                    alt={`Image for ${item.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow ml-4">
                  <h3 className="text-lg font-semibold text-text">{item.name}</h3>
                  <p className="text-slate-400">Price: {item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <p className="mx-2 text-slate-400">{item.quantity}</p>
                    <button
                      className="px-2 py-1 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="px-2 py-1 ml-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between items-center">
              <h4 className="text-lg font-semibold text-text">Total:</h4>
              <p className="text-accent font-bold">${getTotalPrice().toFixed(2)}</p>
            </div>
            <div className="flex justify-center mt-6">
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
