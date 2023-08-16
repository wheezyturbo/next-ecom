'use client'
import React, { useContext, useState, useEffect } from 'react';
import db from '@/db/db';
import { CartContext } from '@/context/CartContext';

const DetailsPage = ({ params }) => {
  const product = db.products.find((p) => p.name === params.prodName);

  if (!product) {
    return <div>Product not found</div>;
  }

  const cart = useContext(CartContext);
  const [showAddedModal, setShowAddedModal] = useState(false);
  const [showAlreadyInCartModal, setShowAlreadyInCartModal] = useState(false);

  const addItemToCart = () => {
    if (!cart.cartItems.some(item => item.name === product.name)) {
      cart.setCartItems(prevCartItems => [...prevCartItems, product]);
      setShowAddedModal(true);
    } else {
      setShowAlreadyInCartModal(true);
    }
  };

  useEffect(() => {
    if (showAddedModal || showAlreadyInCartModal) {
      const timeout = setTimeout(() => {
        setShowAddedModal(false);
        setShowAlreadyInCartModal(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showAddedModal, showAlreadyInCartModal]);

  return (
    <>
      <div className="flex-col justify-center ml-auto items-center mt-10 w-8/12 ">
        <div className="w-3/6 bg-accent text-text rounded-lg shadow-lg p-8 backdrop-blur-md backdrop-filter bg-opacity-30">
          <p className="text-emerald-600 font-bold text-3xl">{product.price}</p>
          <img
            src={product.imgsrc || "https://images.unsplash.com/photo-1611675745374-34fa54cc3c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"}
            alt={`Image for ${product.name}`}
            className="w-full h-80 object-cover mb-4 rounded-md mt-4"
          />
          <div className="flex items-center mb-auto mt-auto justify-center">
            <button className="bg-primary text-white py-2 px-4 rounded-md mr-4" onClick={addItemToCart}>
              Add to Cart
            </button>
            <button className="bg-accent text-white py-2 px-4 rounded-md">Buy Now</button>
          </div>
        </div>

        <div className="w-3/6 ml-10 mr-auto flex-column align-center">
          <h2 className="mt-10 text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-slate-400">{product.desc}</p>
        </div>
      </div>

      {showAddedModal && (
        <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center h-16 bg-green-500 text-white">
          Item added to cart!
        </div>
      )}

      {showAlreadyInCartModal && (
        <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center h-16 bg-red-500 text-white">
          Item is already in the cart!
        </div>
      )}
    </>
  );
};

export default DetailsPage;
